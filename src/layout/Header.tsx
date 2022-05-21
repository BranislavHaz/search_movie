import { Link, useLocation } from "react-router-dom";

import ThemeSwitcher from "../components/layout/ThemeSwitcher";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <nav className="header-navigation">
        <ul>
          <li>
            <Link to="/" className={pathname === "/" ? "active-page" : ""}>
              Homepage
            </Link>
          </li>
          <li>
            <Link
              to="/my-favorites"
              className={pathname === "/my-favorites" ? "active-page" : ""}
            >
              Favorite Movies
            </Link>
          </li>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
