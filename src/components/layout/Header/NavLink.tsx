import "@/components/layout/Header/NavLink.css";
import type { ReactNode } from "react";

export type NavLinkProps = {
  href?: string;
  icon?: ReactNode;
  children?: ReactNode;
  isActive?: boolean;
  className?: string;
};

export function NavLink({
  href = "#",
  icon,
  children,
  isActive = false,
  className = "",
}: NavLinkProps) {
  const Component = href === "#" ? "button" : "a";
  const props =
    href === "#"
      ? { type: "button" as const }
      : { href, role: "link" as const };

  return (
    <Component
      className={`nav-link ${isActive ? "nav-link--active" : ""} ${className}`.trim()}
      {...props}
    >
      {icon && <span className="nav-link__icon">{icon}</span>}
      {children && <span className="nav-link__text">{children}</span>}
    </Component>
  );
}
