"use client";

import { cn } from "@/lib/utils";

const SecondaryButton = ({
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
        "flex items-center justify-center rounded-md border border-white bg-transparent px-5 py-3 font-neue font-bold",
        className,
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
