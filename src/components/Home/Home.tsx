import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Days } from "./Days/Days";
import s from "./Home.module.scss";
import { Weather } from "./interface";
import { ThisDay } from "./ThisDay/ThisDay";
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";

interface Props {
  city: string;
  handlePopup: (event: boolean) => void;
}

export const Home = ({ handlePopup, city }: Props) => {
  const apiid = `204650a9e5dc29a4d4fbdb25d44a2d6a`;
  const [temp, setTemp] = useState<number>();
  const [weather, setWeather] = useState<Weather>();
  useEffect(() => {
    axios
      .get<Weather[]>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiid}`
      )
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setWeather(response.data);
        setTemp(Math.round(response.data.main.temp) - 273);
        console.log("weather:", response.data.main.temp);
      });
  }, []);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay temp={temp} city={city} handlePopup={handlePopup} />
        {/* <ThisDay city={city} handlePopup={handlePopup} /> */}
        <ThisDayInfo temp={temp} />
      </div>
      <Days />
    </div>
  );
};
