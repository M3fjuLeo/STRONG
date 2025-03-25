import React, { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "../ui/ButtonIcon";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ButtonIcon onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <HiOutlineSun /> : <FaRegMoon />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
