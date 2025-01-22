import React, { useState } from "react";

const Chart1 = ({
  width = "380",
  height = "380",
}: {
  width?: string;
  height?: string;
}) => {
  const allocations = [
    { percentage: 10, color: "#7100BD", label: "Private Sale", radius: 180 },
    { percentage: 10, color: "#D1A3FF", label: "Public Sale", radius: 150 },
    { percentage: 15, color: "#7F38CC", label: "Presale", radius: 170 },
    { percentage: 10, color: "#D08BFE", label: "Liquidity", radius: 120 },
    { percentage: 15, color: "#5A199A", label: "Staking Reward", radius: 160 },
  ];

  const totalPercentage = 60;
  const [tooltip, setTooltip] = useState<{
    label: string;
    percentage: number;
    x: number;
    y: number;
  } | null>(null);

  let startAngle = 0;

  // Utility to calculate SVG path and tooltip position
  const calculatePathAndTooltip = (
    allocation: (typeof allocations)[0],
    cumulativeAngle: number,
  ) => {
    const angle = (allocation.percentage / totalPercentage) * 360;
    const endAngle = cumulativeAngle + angle;
    const largeArcFlag = angle > 180 ? 1 : 0;

    const x1 =
      200 + allocation.radius * Math.cos((Math.PI * cumulativeAngle) / 180);
    const y1 =
      200 + allocation.radius * Math.sin((Math.PI * cumulativeAngle) / 180);
    const x2 = 200 + allocation.radius * Math.cos((Math.PI * endAngle) / 180);
    const y2 = 200 + allocation.radius * Math.sin((Math.PI * endAngle) / 180);

    const tooltipX =
      200 +
      (allocation.radius / 1.5) *
        Math.cos((Math.PI * (cumulativeAngle + endAngle)) / 360);
    const tooltipY =
      200 +
      (allocation.radius / 1.5) *
        Math.sin((Math.PI * (cumulativeAngle + endAngle)) / 360);

    const pathData = `M200,200 L${x1},${y1} A${allocation.radius},${allocation.radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;

    return { pathData, tooltipX, tooltipY, endAngle };
  };

  return (
    <div className="relative">
      <svg
        width={width}
        height={height}
        viewBox="0 0 400 400"
        className="w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {allocations.map((allocation, index) => {
          const { pathData, tooltipX, tooltipY, endAngle } =
            calculatePathAndTooltip(allocation, startAngle);
          startAngle = endAngle;

          return (
            <path
              key={index}
              d={pathData}
              fill={allocation.color}
              className="transition-colors hover:opacity-75"
              onMouseEnter={() =>
                setTooltip({
                  label: allocation.label,
                  percentage: allocation.percentage,
                  x: tooltipX,
                  y: tooltipY,
                })
              }
              onMouseLeave={() => setTooltip(null)}
            />
          );
        })}

        {/* Central white circle */}
        <circle cx="200" cy="200" r="56" fill="white" />
        <text
          x="200"
          y="190"
          textAnchor="middle"
          className="fill-black font-neue text-[10px] font-bold md:text-[12px] lg:text-[14px]"
          dominantBaseline="middle"
        >
          Total
        </text>
        <text
          x="200"
          y="205"
          textAnchor="middle"
          className="fill-black font-neue text-[10px] font-bold md:text-[12px] lg:text-[14px]"
          dominantBaseline="middle"
        >
          Supply
        </text>
        <text
          x="200"
          y="223"
          textAnchor="middle"
          className="fill-black font-neue text-[12px] font-bold md:text-[14px] lg:text-[16px]"
          dominantBaseline="middle"
        >
          100M
        </text>
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute rounded bg-black px-2 py-1 text-sm text-white shadow-lg"
          style={{
            top: tooltip.y,
            left: tooltip.x,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          <div>{tooltip.label}</div>
          <div>{tooltip.percentage}%</div>
        </div>
      )}
    </div>
  );
};

export default Chart1;
