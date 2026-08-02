import type { ButtonHTMLAttributes, ReactNode } from "react";
import { AppLink } from "../AppLink";

type BrandButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  to?: string;
};

export function BrandButton({ children, variant = "primary", to, className = "", ...props }: BrandButtonProps) {
  const classes = `pz-button pz-button--${variant} ${className}`.trim();

  if (to) {
    return (
      <AppLink to={to} className={classes}>
        {children}
      </AppLink>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
