import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@utils/helpers";
import ErrorMessage from "../ErrorMessage";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isRequired?: boolean;
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, isRequired, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full mb-5">
        {label && (
          <label className={`text-base font-semibold mb-2`}>
            {label} {isRequired && <span className="text-rose-600">*</span>}
          </label>
        )}
        <input
          type={type}
          className={cn("border border-black rounded p-2", className)}
          ref={ref}
          {...props}
        />
        {Boolean(error?.trim()) && (
          <ErrorMessage className="mt-[4px] p-0" message={error as string} />
        )}
      </div>
    );
  }
);
