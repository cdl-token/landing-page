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
  action?: () => Promise<void> | undefined; 
}) => {
return (
    <button onClick={action && action}
      className={cn(
        "flex items-center justify-center text-nowrap pt-1 rounded-md bg-primary hover:bg-black hover:text-white hover:border-white border border-primary transition-all ease-in duration-200 px-5 py-3 font-neue font-bold text-black",
        className,
      )}
      {...props}
    >
      {title}
    </button>
  );
};


export default PrimaryButton;
