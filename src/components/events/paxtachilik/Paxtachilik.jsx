import React from "react";
import style from "./paxtachilik.module.css"
const Paxtachilik = () => {
  return (
    <div className={style.Paxtachilik}>
      <h1>Paxtachilik kengashi</h1>
      <div className={style.project}>
        <p>
          Ўзбекистон Республикаси Президенти ҳузуридаги пахтачилик кенгаши
          томонидан амалга оширилган ишлар ва келгусида режалаштирилаётган{" "}
          <a style={{color:"red"}} href="https://pubhtml5.com/tvcep/xnwj/"> чора-тадбирлар</a>
        </p>
      </div>
      <h2>Нав жойлаштириш режаси</h2>
      <a href="https://pubhtml5.com/jadj/dhul/">
        Элликқалъа туманида 2023 йилда пахта навларини жойлаштириш режаси
        лойиҳаси
      </a> <br />
      <a href="https://pubhtml5.com/cnxvw/ldfp/">
        Шароф Рашидов туманида 2023 йилда пахта навларини жойлаштириш режаси
        лойиҳаси
      </a> <br />
      <a href="https://pubhtml5.com/cnxvw/yarf/">
        Поп туманида 2023 йилда пахта навларини жойлаштириш режаси лойиҳаси
      </a> <br />
    </div>
  );
};

export default Paxtachilik;
