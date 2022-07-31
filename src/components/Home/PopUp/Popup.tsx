import s from "./Popup.module.scss";
import { Item } from "../ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../ThisDayInfo/ThisDayItem";
import { SvgSelector } from "../../../selectors/SvgSelector";

interface Props {
  handlePopup: (event: boolean) => void;
}
export const Popup = ({ handlePopup }: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <>
      <div className={s.blur}></div>

      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.daytemp}>20°</div>
          <div className={s.dayname}>Среда</div>
          <div className={s.img}>
            <SvgSelector id="small_sun" />
          </div>
          <div className={s.daytime}>
            Время: <span>16:14</span>
          </div>
          <div className={s.daycity}> Новосибирск</div>
        </div>

        <div className={s.thisdayinfoitems}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close} onClick={(event) => handlePopup(false)}>
          <SvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
