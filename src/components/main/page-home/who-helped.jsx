import classes from "./styles/page-home.module.css";

export function WhoHelped() {
  return (
    <section className={classes.mecenats}>
      <div className={classes.mecenats_block}>
        <h2>Кто нам уже помог</h2>

        <ul className={classes.mecenats_list}>
          <li className={classes.mecenats_item}>
            <div className={classes.mecenats_name}>Сбер</div>
            <div className={classes.mecenats_dots}></div>
            <div className={classes.mecenats_cash}> 2 000 000.00 ₽</div>
          </li>
          <li className={classes.mecenats_item}>
            <div className={classes.mecenats_name}>ООО «СЗ Рост» </div>
            <div className={classes.mecenats_dots}></div>
            <div className={classes.mecenats_cash}>1 000 000.00 ₽</div>
          </li>
        </ul>
      </div>
    </section>
  );
}
