"use client";

import {
  createContext, useContext, useReducer, useEffect, useCallback,
} from "react";
import {
  createEmptyGraph, applyWeights,
  getTopResult, getRankedResults,
  getCompatibilityScores, getDNAFromScores,
  getArchetypeFromDNA, getRadarData,
  saveToStorage, loadFromStorage, clearStorage,
} from "@/lib/scoreEngine";
import { QUESTIONS } from "@/data/questions";

export const PHASES = {
  LANDING: "LANDING",
  PLAYING: "PLAYING",
  RESULT:  "RESULT",
};

const INITIAL_STATE = {
  phase:                PHASES.LANDING,
  graph:                createEmptyGraph(),
  currentQuestionIndex: 0,
  answers:              [],
  topResult:            null,
  secondResult:         null,
  rankedResults:        [],
  compatibilityScores:  {},
  dnaPercentages:       {},
  archetype:            null,
  radarData:            [],
};

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, ...action.payload };

    case "START_GAME":
      return { ...INITIAL_STATE, phase: PHASES.PLAYING };

    case "ANSWER": {
      const nextGraph  = applyWeights(state.graph, action.weights);
      const nextIndex  = state.currentQuestionIndex + 1;
      const isLast     = nextIndex >= QUESTIONS.length;

      const ranked     = getRankedResults(nextGraph);
      const compat     = getCompatibilityScores(nextGraph);
      const dna        = getDNAFromScores(compat);
      const archetype  = getArchetypeFromDNA(dna);
      const radarData  = getRadarData(nextGraph);

      return {
        ...state,
        graph:                nextGraph,
        currentQuestionIndex: nextIndex,
        answers: [...state.answers, { questionId: action.questionId, optionId: action.optionId }],
        phase:               isLast ? PHASES.RESULT : PHASES.PLAYING,
        topResult:           ranked[0]?.node ?? null,
        secondResult:        ranked[1]?.node ?? null,
        rankedResults:       ranked,
        compatibilityScores: compat,
        dnaPercentages:      dna,
        archetype,
        radarData,
      };
    }

    case "RESTART":
      clearStorage();
      return { ...INITIAL_STATE };

    default:
      return state;
  }
}

const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const saved = loadFromStorage();
    if (saved?.phase === PHASES.PLAYING || saved?.phase === PHASES.RESULT) {
      dispatch({ type: "HYDRATE", payload: saved });
    }
  }, []);

  useEffect(() => {
    if (state.phase !== PHASES.LANDING) saveToStorage(state);
  }, [state]);

  const startGame    = useCallback(() => dispatch({ type: "START_GAME" }), []);
  const submitAnswer = useCallback((option, questionId) => {
    dispatch({ type: "ANSWER", weights: option.weights, optionId: option.id, questionId });
  }, []);
  const restart      = useCallback(() => dispatch({ type: "RESTART" }), []);

  const currentQuestion =
    state.phase === PHASES.PLAYING
      ? QUESTIONS[state.currentQuestionIndex] ?? null
      : null;

  const progress =
    state.phase === PHASES.PLAYING
      ? (state.currentQuestionIndex / QUESTIONS.length) * 100
      : state.phase === PHASES.RESULT ? 100 : 0;

  return (
    <QuizContext.Provider value={{
      ...state, PHASES, currentQuestion,
      progress, totalQuestions: QUESTIONS.length,
      startGame, submitAnswer, restart,
    }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used inside QuizProvider");
  return ctx;
}
