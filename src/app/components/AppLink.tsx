import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useHref, useNavigate } from "react-router";
import { navigateWithScroll } from "../utils/navigation";

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children: ReactNode;
};

export function AppLink({ to, onClick, children, ...props }: AppLinkProps) {
  const navigate = useNavigate();
  const href = useHref(to);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    navigateWithScroll(navigate, to);
  };

  return (
    <a {...props} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
