import { forwardRef, useId } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
    label?: string;
    error?: string;
    helperText?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, helperText, className, id, disabled, ...rest }, ref) => {
        const generatedId = useId();
        const inputId = id ?? generatedId;
        const messageId = `${inputId}-message`;
        const message = error ?? helperText;

        return(
            <div className="flex w-full flex-col gap-1.5">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    disabled={disabled}
                    aria-invalid={!!error}
                    aria-describedby={message ? messageId : undefined}
                    className={cn(
                        "w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-900",
                        "placeholder:text-gray-400",
                        "focus:outline-none focus:ring-2 focus:ring-offset-0",
                        "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
                        error
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500/30",
                        className
                    )}
                    {...rest}
                />
                
                {message && (
                    <p
                        id={messageId}
                        className={cn("text-xs", error ? "text-red-600" : "text-gray-500")}
                    >
                        {message}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;