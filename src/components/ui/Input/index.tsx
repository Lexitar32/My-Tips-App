import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@utils/helpers";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return <input type={type} className={cn(className)} ref={ref} {...props} />;
  }
);
