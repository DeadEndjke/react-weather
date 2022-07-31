import React, { useEffect, useState } from "react";
import { SvgSelector } from "./../../selectors/SvgSelector";
import s from "./Header.module.scss";
import Select from "react-select";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";

interface Props {
  changeCity: (event: string) => void;
}

export const Header = ({ changeCity }: Props) => {
  const theme = useTheme();
  const options = [
    { value: "Novosibirsk", label: "Новосибирск" },
    { value: "Moscow", label: "Москва" },
    { value: "Novosibirsk", label: "Бийск" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme == Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme == Theme.DARK ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <SvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <SvgSelector id="change-theme" />
        </div>

        <select
          name=""
          id=""
          onChange={(event) => {
            changeCity(event.target.value);
          }}
        >
          <option value="Novosibirsk">Новосибирск</option>
          <option value="Moscow">Москва</option>
          <option value="Biysk">Бийск</option>
        </select>
      </div>
    </header>
  );
};
