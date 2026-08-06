import { cn } from "../../../lib/cn";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "medium" | "large";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({ 
  variant = "primary", 
  size = "medium",
  children, 
  className,
  onClick,
  type = "button"
}: ButtonProps) {
  return (
    <button 
      type={type}
      className={cn(styles.button, styles[variant], styles[size], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}