import { SvgSelector } from "./../../../selectors/SvgSelector";
import s from "./ThisDay.module.scss";

interface Props {
  handlePopup: (event: boolean) => void;
  // weather: any;
  temp: number | undefined;
  city: string;
}

export const ThisDay = ({ handlePopup, temp, city }: Props) => {
  // export const ThisDay = ({ handlePopup, city }: Props) => {
  // const temp = Math.round(weather.main.temp) - 273;
  const now = new Date();

  return (
    <div className={s.thisday} onClick={(event) => handlePopup(true)}>
      <div className={s.topblock}>
        <div className={s.topblockwrapper}>
          {" "}
          <div className={s.thistemp}>{temp}°</div>
          {/* <div className={s.thistemp}>20°</div> */}
          <div className={s.thisdayname}>Сегодня</div>
        </div>

        <SvgSelector id="sun" />
      </div>
      <div className={s.botblock}>
        <div className={s.thistime}>
          Время:{" "}
          <span>
            {now.getHours()}:{now.getMinutes()}
          </span>
        </div>
        <div className={s.thiscity}> {city}</div>
      </div>
    </div>
  );
};
