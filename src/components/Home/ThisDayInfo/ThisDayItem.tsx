import s from "./ThisDayInfo.module.scss";
import { Item } from "./ThisDayInfo";
import { IndicatorSelector } from "./../../../selectors/IndicatorSelector";

interface Props {
  item: Item;
}

export const ThisDayItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSelector id={icon_id} />
      </div>
      <div className={s.indicatorname}>{name}</div>
      <div className={s.indicatorvalue}>{value}</div>
    </div>
  );
};
