import React from "react";

const Chart2 = ({
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
        d="M199.613 0.7771C231.164 0.7771 262.261 8.28601 290.335 22.6832C318.409 37.0803 342.654 57.9523 361.065 83.574L280.311 141.601C271.109 128.795 258.991 118.363 244.958 111.167C230.926 103.97 215.383 100.217 199.613 100.217V0.7771Z"
        className="fill-[#CE86FF] transition-colors hover:fill-[#9a64cc]"
      />
      <path
        d="M361.824 84.6384C376.73 105.673 387.403 129.405 393.247 154.514L296.397 177.059C293.475 164.509 288.141 152.647 280.69 142.133L361.824 84.6384Z"
        className="fill-[#FEDB31] transition-colors hover:fill-[#e0c417]"
      />
      <path
        d="M393.525 155.722C401.694 191.833 399.617 229.508 387.528 264.503C375.439 299.497 353.819 330.421 325.102 353.79L262.336 276.662C276.689 264.982 287.496 249.525 293.538 232.034C299.58 214.543 300.618 195.712 296.535 177.663L393.525 155.722Z"
        className="fill-[#F7931A] transition-colors hover:fill-[#f37a12]"
      />
      <path
        d="M323.596 355.004C290.568 381.352 250.005 396.493 207.791 398.231C165.576 399.969 123.906 388.213 88.8242 364.669C53.7424 341.125 27.0733 307.017 12.6854 267.292C-1.70255 227.567 -3.06111 184.292 8.80675 143.743L104.243 171.675C98.3115 191.943 98.9905 213.573 106.182 233.428C113.373 253.284 126.703 270.332 144.238 282.1C161.773 293.868 182.601 299.743 203.7 298.875C224.8 298.006 245.075 290.438 261.583 277.269L323.596 355.004Z"
        className="fill-[#7100BD] transition-colors hover:fill-[#5a006f]"
      />
      <path
        d="M9.1523 142.576C22.3918 98.3465 50.6115 60.1041 88.9692 34.4103L144.311 117.028C125.138 129.87 111.033 148.985 104.416 171.092L9.1523 142.576Z"
        className="fill-[#CE86FF] transition-colors hover:fill-[#9a64cc]"
      />
      <path
        d="M90.0949 33.6618C121.991 12.6093 159.278 1.19602 197.493 0.788408L198.553 100.223C179.453 100.427 160.815 106.131 144.873 116.654L90.0949 33.6618Z"
        className="fill-[#DEEBBC] transition-colors hover:fill-[#c1d27b]"
      />
    </svg>
  );
};

export default Chart2;