"use client";

const PrimaryButton = ({ title, ...props }: { title: string }) => {
  return (
    <button
      className="bg-primary text-black font-neue font-bold flex items-center justify-center rounded-md px-5 py-3"
      {...props}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
