"use client";
import { cn } from "@/lib/utils";

const PrimaryButton = ({
  className = "",
  title,
  action,
  type = "button", // Default type is set to "button"
  disabled = false,
  ...props
}: {
  className?: string;
  title: string;
  type?: "button" | "submit" | "reset"; // Match the button type
  disabled?: boolean;
  action?: (() => Promise<void>) | (() => void);
}) => {
  return (
    <button
      onClick={action && action}
      className={cn(
        "flex items-center justify-center text-nowrap rounded-md border border-primary bg-primary px-5 py-3 font-neue font-bold text-black transition-all duration-200 ease-in hover:border-white hover:bg-black hover:text-white",
        className,
      )}
      disabled={disabled}
      type={type}
      {...props}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
