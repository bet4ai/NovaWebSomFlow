import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Section.module.css";

type SectionVariant = "default" | "muted" | "dark";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: SectionVariant;
}

export function Section({
  children,
 variant = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(styles.section, styles[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
}