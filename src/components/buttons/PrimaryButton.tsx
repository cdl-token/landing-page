"use client";
import { cn } from "@/lib/utils";

const PrimaryButton = ({
  className = "",
  title,
  action,
  ...props
}: {
  className?: string;
  title: string;
  action?: () => Promise<void>;
}) => {
  return (

    <button onClick={action}
      className={cn(
        "flex items-center justify-center text-nowrap pt-1 rounded-md bg-primary px-5 py-3 font-neue font-bold text-black",
        className,
      )}
      {...props}
    >
      {title}
    </button>
  );
};


export default PrimaryButton;
