import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@utils/helpers";
import { SubmittingIcon } from "@assets/icons/SubmittingIcon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  size?: "large" | "medium" | "small";
  className?: string;
  isSubmitting?: boolean;
  title: string;
  withIcon?: boolean;
  icon?: React.ReactNode;
}

const variantStyles = {
  contained:
    "bg-black text-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none",
  outlined: "border border-black",
  text: "text-black",
};

const sizeStyles = {
  small: "px-2 py-1 text-sm",
  medium: "px-3 py-2 text-base",
  large: "px-4 py-3 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      title,
      withIcon,
      icon,
      size,
      className,
      variant,
      isSubmitting,
      ...rest
    } = props;

    const variantClassName =
      variantStyles[variant || "contained"] || variantStyles.contained;
    const sizeClassName = sizeStyles[size || "medium"] || sizeStyles.medium;

    const mergedClassName = cn(
      variantClassName,
      sizeClassName,
      className,
      "flex items-center rounded-lg cursor-pointer font-mont"
    );

    return (
      <button
        {...rest}
        ref={ref}
        className={mergedClassName}
        disabled={isSubmitting}
      >
        {withIcon && icon && <div className="pr-3">{icon}</div>}

        {isSubmitting ? (
          <div className="flex items-center">
            <SubmittingIcon className="w-5 h-5 mr-2 animate-spin" />
            Processing
          </div>
        ) : (
          title
        )}
      </button>
    );
  }
);
