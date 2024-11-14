"use client";

import { cn } from "@/lib/utils";

const PrimaryButton = ({
  className = "",
  title,
  ...props
}: {
  className?: string;
  title: string;
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-md bg-primary px-5 py-3 font-neue font-bold text-black",
        className,
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
