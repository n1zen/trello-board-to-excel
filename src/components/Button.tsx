import { forwardRef } from 'react';
import { cn } from '../lib/utils';

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};

const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-400",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
};

const sizes: Record<ButtonSize, string> = {
    sm: "h-8 px-3 text-sm gap-1.5",
    md: "h-10 px-4 text-sm gap-2",
    lg: "h-12 px-6 text-base gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            loading = false,
            leftIcon,
            rightIcon,
            className,
            disabled,
            type = "button",
            children,
            ...rest
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled || loading}
                aria-busy={loading || undefined}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                    "disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...rest}
            >
                {loading ? (
                    <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                    </svg>
                ) : (
                    leftIcon
                )}
                {children}
                {!loading && rightIcon}
            </button>
        );
    }
);
Button.displayName = "Button"

export default Button