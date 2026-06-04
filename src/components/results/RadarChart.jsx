"use client";

import { motion } from "framer-motion";

const SIZE = 280;
const CENTER = SIZE / 2;
const RINGS = 4;

function polarToCartesian(angle, radius) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

function buildPolygonPath(values, maxRadius) {
  const n = values.length;
  return values
    .map((v, i) => {
      const angle = (360 / n) * i;
      const r = (v / 100) * maxRadius;
      const { x, y } = polarToCartesian(angle, r);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ") + " Z";
}

const LABELS = {
  BCT: "BCT",
  CSIT: "CSIT",
  BCA: "BCA",
  BEI: "BEI",
  BCE: "BCE",
  BARCH: "ARCH",
};

export default function RadarChart({ radarData }) {
  if (!radarData || radarData.length === 0) return null;

  const maxRadius = CENTER - 36;
  const n = radarData.length;

  // Grid rings
  const rings = Array.from({ length: RINGS }, (_, i) => {
    const r = ((i + 1) / RINGS) * maxRadius;
    return Array.from({ length: n }, (__, j) => {
      const angle = (360 / n) * j;
      return polarToCartesian(angle, r);
    });
  });

  const values = radarData.map((d) => d.value);
  const polygonPath = buildPolygonPath(values, maxRadius);
  const topNode = radarData.reduce((t, d) => (d.value > t.value ? d : t));

  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="overflow-visible"
      >
        {/* Grid rings */}
        {rings.map((ring, ri) => (
          <polygon
            key={ri}
            points={ring.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {radarData.map((d, i) => {
          const angle = (360 / n) * i;
          const end = polarToCartesian(angle, maxRadius);
          return (
            <line
              key={d.node}
              x1={CENTER}
              y1={CENTER}
              x2={end.x}
              y2={end.y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          );
        })}

        {/* Filled polygon */}
        <motion.path
          d={polygonPath}
          fill="rgba(0,242,254,0.08)"
          stroke="rgba(0,242,254,0.5)"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        />

        {/* Data points */}
        {radarData.map((d, i) => {
          const angle = (360 / n) * i;
          const r = (d.value / 100) * maxRadius;
          const { x, y } = polarToCartesian(angle, r);
          return (
            <motion.circle
              key={d.node}
              cx={x}
              cy={y}
              r={4}
              fill={d.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            />
          );
        })}

        {/* Labels */}
        {radarData.map((d, i) => {
          const angle = (360 / n) * i;
          const labelR = maxRadius + 22;
          const { x, y } = polarToCartesian(angle, labelR);
          const isTop = d.node === topNode.node;
          return (
            <text
              key={d.node}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={isTop ? "11" : "10"}
              fontWeight={isTop ? "800" : "600"}
              fill={isTop ? d.color : "rgba(255,255,255,0.45)"}
            >
              {LABELS[d.node]}
              {isTop && " ★"}
            </text>
          );
        })}

        {/* Percentage at each vertex */}
        {radarData.map((d, i) => {
          const angle = (360 / n) * i;
          const r = (d.value / 100) * maxRadius;
          const { x, y } = polarToCartesian(angle, r - 14);
          if (d.value < 20) return null;
          return (
            <motion.text
              key={`pct-${d.node}`}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="8"
              fontWeight="700"
              fill={d.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.06 }}
            >
              {d.value}%
            </motion.text>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
        {radarData.map((d) => (
          <div key={d.node} className="flex items-center gap-1.5">
            <div className="size-2 rounded-full" style={{ background: d.color }} />
            <span className="text-[0.7rem] font-mono text-white/50">{d.node}</span>
            <span className="text-[0.7rem] font-bold" style={{ color: d.color }}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
