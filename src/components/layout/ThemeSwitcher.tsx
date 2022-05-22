import { useEffect, useState, useRef } from "react";

import lightMode from "../../assets/images/light-mode.png";
import darkMode from "../../assets/images/dark-mode.png";

const ThemeSwitcher = () => {
  const changeThemeBtn = useRef<HTMLImageElement>(null);
  const [dark, setIsDark] = useState<Boolean | null>(null);

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");

    if (dark === null && getTheme === "dark") {
      getTheme === "dark" ? setIsDark(true) : setIsDark(false);
    }

    if (dark) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  const handleClick = () => {
    setIsDark(!dark);

    // Animate change theme button
    if (changeThemeBtn !== null) {
      changeThemeBtn.current?.classList.add("active");
      setTimeout(() => {
        changeThemeBtn.current?.classList.remove("active");
      }, 100);
    }
  };

  return (
    <img
      className="change-theme-btn"
      src={dark ? lightMode : darkMode}
      onClick={handleClick}
      ref={changeThemeBtn}
      alt="Theme switcher"
    />
  );
};

export default ThemeSwitcher;
