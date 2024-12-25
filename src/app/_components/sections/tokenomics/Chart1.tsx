const Chart1 = ({
  width = "380",
  height = "380",
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 399 399"
      className="w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-transform duration-200 hover:scale-105 hover:brightness-90"
        d="M199.254 0.87207C230.804 0.872071 261.902 8.38098 289.976 22.7782C318.05 37.1753 342.294 58.0473 360.705 83.6689L199.254 199.683V0.87207Z"
        fill="#7100BD"
      />
      <path
        className="transition-transform duration-200 hover:scale-105 hover:brightness-90"
        d="M340.042 100.081C353.031 118.411 362.331 139.092 367.425 160.973L198.686 200.252L340.042 100.081Z"
        fill="#D1A3FF"
      />
      <path
        className="transition-transform duration-200 hover:scale-105 hover:brightness-90"
        d="M362.139 163.971C369.001 194.305 367.257 225.952 357.102 255.347C346.948 284.743 328.786 310.719 304.665 330.349L199.254 200.819L362.139 163.971Z"
        fill="#7F38CC"
      />
      <path
        className="transition-transform duration-200 hover:scale-105 hover:brightness-90"
        d="M323.877 352.063C291.132 378.185 250.917 393.196 209.065 394.919C167.212 396.642 125.899 384.987 91.1181 361.645C56.337 338.302 29.8965 304.487 15.6319 265.102C1.36726 225.718 0.0203383 182.814 11.7865 142.612L200.958 197.979L323.877 352.063Z"
        fill="#5A189A"
      />
      <path
        className="transition-transform duration-200 hover:scale-105 hover:brightness-90"
        d="M40.3545 149.846C51.4 112.947 74.9434 81.0416 106.945 59.6056L199.253 197.411L40.3545 149.846Z"
        fill="#D1A3FF"
      />
      <path
        className="transition-transform duration-200 hover:scale-105 hover:brightness-90"
        d="M124.781 84.5809C146.471 70.2652 171.826 62.5041 197.812 62.2269L199.254 197.411L124.781 84.5809Z"
        fill="#7F38CC"
      />
      <circle cx="202.662" cy="197.411" r="56.8032" fill="white" />
      <text
        x="202.662"
        y="187.411"
        textAnchor="middle"
        className="fill-black font-neue text-[10px] font-bold md:text-[12px] lg:text-[14px]"
        dominantBaseline="middle"
      >
        Total
      </text>
      <text
        x="202.662"
        y="202.411"
        textAnchor="middle"
        className="fill-black font-neue text-[10px] font-bold md:text-[12px] lg:text-[14px]"
        dominantBaseline="middle"
      >
        Supply
      </text>
      <text
        x="202.662"
        y="220.411"
        textAnchor="middle"
        className="fill-black font-neue text-[12px] font-bold md:text-[14px] lg:text-[16px]"
        dominantBaseline="middle"
      >
        100M
      </text>
    </svg>
  );
};

export default Chart1;
