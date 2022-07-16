import { SvgSelector } from "./../../../selectors/SvgSelector";
import s from "./ThisDay.module.scss";

interface Props {}

export const ThisDay = (props: Props) => {
  return (
    <div className={s.thisday}>
      <div className={s.topblock}>
        <div className={s.topblockwrapper}>
          {" "}
          <div className={s.thistemp}>20°</div>
          <div className={s.thisdayname}>Сегодня</div>
        </div>

        <SvgSelector id="sun" />
      </div>
      <div className={s.botblock}>
        <div className={s.thistime}>
          Время: <span>16:14</span>
        </div>
        <div className={s.thiscity}> Новосибирск</div>
      </div>
    </div>
  );
};
