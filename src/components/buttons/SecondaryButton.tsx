"use client";

const SecondaryButton = ({ title, ...props }: { title: string }) => {
  return (
    <button
      className="bg-transparent border border-white font-neue font-bold flex items-center justify-center rounded-md px-5 py-3"
      {...props}
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
