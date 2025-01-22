import React, { useState } from "react";

const Chart2 = ({
  width = "380",
  height = "380",
  data = [
    { color: "#CFD4C1", label: "15% Ecosystem", percentage: 15 },
    { color: "#CE86FF", label: "10% Team & Advisors", percentage: 10 },
    { color: "#FEDB32", label: "5% Marketing & Development", percentage: 5 },
    { color: "#F7931A", label: "5% KOL's & Airdrop's", percentage: 5 },
    { color: "#5300AE", label: "5% Legal Department", percentage: 5 },
  ],
}: {
  width?: string;
  height?: string;
  data?: { color: string; label: string; percentage: number }[];
}) => {
  const [tooltip, setTooltip] = useState<{
    label: string;
    x: number;
    y: number;
  } | null>(null);

  const totalPercentage = data.reduce((sum, item) => sum + item.percentage, 0);

  // Calculate angles
  let startAngle = 0;
  const segments = data.map((item) => {
    const angle = (item.percentage / totalPercentage) * 360;
    const endAngle = startAngle + angle;
    const largeArcFlag = angle > 180 ? 1 : 0;

    const x1 = 200 + 200 * Math.cos((Math.PI * startAngle) / 180);
    const y1 = 200 + 200 * Math.sin((Math.PI * startAngle) / 180);
    const x2 = 200 + 200 * Math.cos((Math.PI * endAngle) / 180);
    const y2 = 200 + 200 * Math.sin((Math.PI * endAngle) / 180);

    // Calculate the center of the segment to show the tooltip
    const tooltipX =
      200 + 150 * Math.cos((Math.PI * (startAngle + endAngle)) / 2 / 180);
    const tooltipY =
      200 + 150 * Math.sin((Math.PI * (startAngle + endAngle)) / 2 / 180);

    const pathData = `M200,200 L${x1},${y1} A200,200 0 ${largeArcFlag} 1 ${x2},${y2} Z`;

    startAngle = endAngle;

    return {
      color: item.color,
      pathData,
      label: item.label,
      percentage: item.percentage,
      tooltipX,
      tooltipY,
    };
  });

  // Handle mouse enter
  const handleMouseEnter = (label: string, x: number, y: number) => {
    setTooltip({ label, x, y });
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setTooltip(null);
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
        {/* Outer circle segments */}
        {segments.map((segment, index) => (
          <path
            key={index}
            d={segment.pathData}
            fill={segment.color}
            className="transition-colors hover:opacity-75"
            onMouseEnter={() =>
              handleMouseEnter(
                segment.label,
                segment.tooltipX,
                segment.tooltipY,
              )
            }
            onMouseLeave={handleMouseLeave}
          />
        ))}

        {/* Inner circle (hole) */}
        <circle cx="200" cy="200" r="100" fill="black" />
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute rounded bg-black p-2 text-white"
          style={{
            top: tooltip.y,
            left: tooltip.x,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span>{tooltip.label}</span>
        </div>
      )}
    </div>
  );
};

export default Chart2;
