import { SvgSelector } from "./../../selectors/SvgSelector";
import s from "./Header.module.scss";
import Select from "react-select";

interface Props {}

export const Header = (props: Props) => {
  const options = [
    { value: "city1", label: "Новосибирск" },
    { value: "city2", label: "Москва" },
    { value: "city3", label: "Бийск" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <SvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <SvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  );
};
