import { useEffect, useState, useRef } from "react";

import lightMode from "../../assets/images/light-mode.png";
import darkMode from "../../assets/images/dark-mode.png";

const ThemeSwitcher = () => {
  const changeThemeBtn = useRef<HTMLImageElement>(null);
  const [theme, setTheme] = useState<Boolean | null>(null);

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");

    if (theme === null && getTheme === "dark") {
      getTheme === "dark" ? setTheme(true) : setTheme(false);
    }

    if (theme) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(!theme);

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
      src={theme ? lightMode : darkMode}
      onClick={handleClick}
      ref={changeThemeBtn}
      alt="Theme switcher"
    />
  );
};

export default ThemeSwitcher;
