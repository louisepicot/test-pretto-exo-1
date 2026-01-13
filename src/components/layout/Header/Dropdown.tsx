import "@/components/layout/Header/Dropdown.css";
import { BurgerMenuIcon, ChevronDownIcon } from "@/components/ui/icons";

export type DropdownProps = {
  email?: string;
  avatarLetter?: string;
  className?: string;
};

export function Dropdown({
  email = "prelead@pretto.fr",
  avatarLetter = "C",
  className = "",
}: DropdownProps) {
  return (
    <div className={`dropdown ${className}`.trim()}>
      {/* Desktop/Tablet: Full dropdown */}
      <div className="dropdown__desktop">
        <div className="dropdown__avatar">{avatarLetter}</div>
        <span className="dropdown__email">{email}</span>
        <ChevronDownIcon size={16} color="var(--color-text-primary)" />
      </div>

      {/* Mobile/Tablet: Burger menu icon */}
      <button
        type="button"
        className="dropdown__mobile"
        aria-label="Menu"
      >
        <BurgerMenuIcon size={24} color="var(--color-text-primary)" />
      </button>
    </div>
  );
}
