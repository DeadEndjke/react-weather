import s from "./Days.module.scss";
import { Day } from "./Days";
import { SvgSelector } from "./../../../selectors/SvgSelector";

interface Props {
  day: Day;
}

export const Card = ({ day }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.info}>{day.day_info}</div>
      <div className={s.img}>
        <SvgSelector id={day.icon_id} />
      </div>
      <div className={s.tempday}>{day.temp_day}</div>
      <div className={s.tempnight}>{day.temp_night}</div>
      <div className={s.info}>{day.info}</div>
    </div>
  );
};
