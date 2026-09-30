import { forwardRef } from 'react';
import { cn } from '../lib/utils';

export type CardProps = React.ComponentPropsWithoutRef<"div"> & {
    hoverable?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverable, ...rest }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm",
                hoverable && "transition-shadow hover:shadow-md",
                className
            )}
            {...rest}
        />
    )
);
Card.displayName = "Card";

export type CardHeaderProps = React.ComponentPropsWithoutRef<"div">;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, ...rest }, ref) => (
        <div
            ref={ref}
            className={cn("flex flex-col gap-1 p-5 pb-0", className)}
            {...rest}
        />
    )
);
CardHeader.displayName = "CardHeader";

export type CardTitleProps = React.ComponentPropsWithoutRef<"h3">;

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, ...rest }, ref) => (
        <h3
            ref={ref}
            className={cn("text-lg font-semibold leading-tight", className)}
            {...rest}
        />
    )
);
CardTitle.displayName = "CardTitle";

export type CardDescriptionProps = React.ComponentPropsWithoutRef<"p">;

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, ...rest }, ref) => (
        <p
            ref={ref}
            className={cn("text-sm text-gray-500", className)}
            {...rest}
        />
    )
);
CardDescription.displayName = "CardDescription";

export type CardContentProps = React.ComponentPropsWithoutRef<"div">;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps> (
    ({ className, ...rest }, ref) => (
        <div
            ref={ref}
            className={cn("p-5", className)}
            {...rest}
        />
    )
);
CardContent.displayName = "CardContent";

export type CardFooterProps = React.ComponentPropsWithoutRef<"div">;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps> (
    ({ className, ...rest }, ref) => (
        <div
            ref={ref}
            className={cn("flex items-center gap-2 p-5 pt-0", className)}
            {...rest}
        />
    )
);
CardFooter.displayName = "CardFooter";