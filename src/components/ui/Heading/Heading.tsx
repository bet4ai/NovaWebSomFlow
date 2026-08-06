import { cn } from "../../../lib/cn";
import styles from "./Heading.module.css";

type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "hero";
type HeadingAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  as?: HeadingAs;
  variant?: HeadingVariant;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ 
  as: Component = "h1", 
  variant = "h1", 
  children, 
  className 
}: HeadingProps) {
  return (
    <Component className={cn(styles.heading, styles[variant], className)}>
      {children}
    </Component>
  );
}