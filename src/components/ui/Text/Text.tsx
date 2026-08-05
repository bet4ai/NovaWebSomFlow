import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Text.module.css";

export type TextVariant = "lead" | "body" | "small" | "caption" | "quote";
export type TextColor = "primary" | "secondary" | "muted" | "inverse" | "brand";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: "p" | "span" | "div" | "blockquote";
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  className?: string;
}

export function Text({
  children,
  as: Component = "p",
  variant = "body",
  color = "primary",
  weight = "regular",
  className,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        styles.text,
        styles[variant],
        styles[color],
        styles[weight],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
