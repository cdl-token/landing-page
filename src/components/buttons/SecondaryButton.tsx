"use client";

import { cn } from "@/lib/utils";

const SecondaryButton = ({
  className = "",
  title,
  action,
  ...props
}: {
  className?: string;
  title: string;
  action?: (() => void | Promise<void>) | undefined;
}) => {
  return (
    <button onClick={action && action}
      className={cn(
        "flex items-center justify-center pt-1 text-nowrap rounded-md border border-white bg-transparent hover:border-primary hover:text-primary transition-all ease-in duration-200 px-5 py-3 font-neue font-bold",
        className,
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
