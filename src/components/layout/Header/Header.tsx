import "@/components/layout/Header/Header.css";
import { NavLink } from "@/components/layout/Header/NavLink";
import { Dropdown } from "@/components/layout/Header/Dropdown";
import HouseIcon from "@/assets/svg/House.svg?react";
import TuneIcon from "@/assets/svg/Tune.svg?react";
import HelpIcon from "@/assets/svg/help.svg?react";
import logoPretto from "@/assets/svg/logo-pretto.svg";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logoPretto} alt="Pretto" />
        </div>

        <nav className="header__nav">
          <NavLink
            href="/dashboard"
            icon={<HouseIcon width={20} height={20} />}
            isActive={true}
          >
            Tableau de bord
          </NavLink>
          <NavLink
            href="/simulation"
            icon={<TuneIcon width={20} height={20} />}
          >
            Simulation
          </NavLink>
          <NavLink href="#" icon={<HelpIcon width={20} height={20} />} />
        </nav>

        <Dropdown />
      </div>
      <div className="header__separator" />
    </header>
  );
}
