import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Heading.module.css";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize = "hero" | "h1" | "h2" | "h3" | "h4";
export type HeadingColor = "default" | "brand" | "muted" | "inverse";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: HeadingLevel;
  size?: HeadingSize;
  color?: HeadingColor;
  className?: string;
}

export function Heading({
  children,
  as: Component = "h2",
  size,
  color = "default",
  className,
  ...props
}: HeadingProps) {
  const computedSize = size || (Component in styles ? (Component as HeadingSize) : "h2");

  return (
    <Component
      className={cn(
        styles.heading,
        styles[computedSize],
        styles[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
