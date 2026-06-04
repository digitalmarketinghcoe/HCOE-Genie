"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import {
  createEmptyGraph,
  createEmptyDNA,
  applyWeights,
  applyDNA,
  getTopResult,
  getRankedResults,
  getDNAPercentages,
  getArchetypeFromDNA,
  getCompatibilityScores,
  getRadarData,
  saveGraphToStorage,
  loadGraphFromStorage,
  clearGraphStorage,
} from "@/lib/graphify";
import { QUESTIONS } from "@/data/questions";

export const PHASES = {
  LANDING: "LANDING",
  PLAYING: "PLAYING",
  RESULT: "RESULT",
};

const INITIAL_STATE = {
  phase: PHASES.LANDING,
  graph: createEmptyGraph(),
  dna: createEmptyDNA(),
  currentQuestionIndex: 0,
  answers: [],             // [{ questionId, optionId, tag }]
  topResult: null,
  secondResult: null,
  rankedResults: [],
  compatibilityScores: {},
  dnaPercentages: {},
  archetype: null,
  radarData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, ...action.payload };

    case "START_GAME":
      return { ...INITIAL_STATE, phase: PHASES.PLAYING };

    case "ANSWER": {
      const nextGraph = applyWeights(state.graph, action.weights);
      const nextDNA = applyDNA(state.dna, action.dnaDelta);
      const nextIndex = state.currentQuestionIndex + 1;
      const isLast = nextIndex >= QUESTIONS.length;

      const ranked = getRankedResults(nextGraph);
      const compat = getCompatibilityScores(nextGraph);
      const dnaPct = getDNAPercentages(nextDNA);
      const archetype = getArchetypeFromDNA(nextDNA);
      const radarData = getRadarData(nextGraph);

      return {
        ...state,
        graph: nextGraph,
        dna: nextDNA,
        currentQuestionIndex: nextIndex,
        answers: [
          ...state.answers,
          { questionId: action.questionId, optionId: action.optionId, tag: action.tag },
        ],
        phase: isLast ? PHASES.RESULT : PHASES.PLAYING,
        topResult: ranked[0]?.node ?? null,
        secondResult: ranked[1]?.node ?? null,
        rankedResults: ranked,
        compatibilityScores: compat,
        dnaPercentages: dnaPct,
        archetype,
        radarData,
      };
    }

    case "RESTART":
      clearGraphStorage();
      return { ...INITIAL_STATE };

    default:
      return state;
  }
}

const GraphifyContext = createContext(null);

export function GraphifyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // Hydrate saved session
  useEffect(() => {
    const saved = loadGraphFromStorage();
    if (saved?.phase === PHASES.PLAYING || saved?.phase === PHASES.RESULT) {
      dispatch({ type: "HYDRATE", payload: saved });
    }
  }, []);

  // Persist on every state change
  useEffect(() => {
    if (state.phase !== PHASES.LANDING) saveGraphToStorage(state);
  }, [state]);

  const startGame = useCallback(() => dispatch({ type: "START_GAME" }), []);

  const submitAnswer = useCallback((option, questionId) => {
    dispatch({
      type: "ANSWER",
      weights: option.weights,
      dnaDelta: option.dna,
      optionId: option.id,
      questionId,
      tag: option.tag,
    });
  }, []);

  const restart = useCallback(() => dispatch({ type: "RESTART" }), []);

  const currentQuestion =
    state.phase === PHASES.PLAYING
      ? QUESTIONS[state.currentQuestionIndex] ?? null
      : null;

  const progress =
    state.phase === PHASES.PLAYING
      ? (state.currentQuestionIndex / QUESTIONS.length) * 100
      : state.phase === PHASES.RESULT
      ? 100
      : 0;

  return (
    <GraphifyContext.Provider
      value={{
        ...state,
        PHASES,
        currentQuestion,
        progress,
        totalQuestions: QUESTIONS.length,
        startGame,
        submitAnswer,
        restart,
      }}
    >
      {children}
    </GraphifyContext.Provider>
  );
}

export function useGraphify() {
  const ctx = useContext(GraphifyContext);
  if (!ctx) throw new Error("useGraphify must be used inside GraphifyProvider");
  return ctx;
}
