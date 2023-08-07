import React, { useEffect, useState } from "react";
import style from "./Region.module.css";
import { instance } from "../../api/API";
import { useTranslation } from "react-i18next";
const Region = () => {
  const [data, setData] = useState([]);
  const {t} =useTranslation()
  useEffect(() => {
    instance
      .get("hududlar/")
      .then((response) => setData(response.data));
  }, [setData]);
const map=data.map(a=>
  <div className={style.cards} key={a.id}>
  <h1>{a.manzil}</h1>
  <img src={a.img} alt="" />
  <div className={style.wrapper}>
    <p>{t("region_a")}: {a.aholi}</p>
    <p>{t("region_n")}: {a.loyhalar_soni}</p>
    <p>{t("maydon")}: {a.maydoni} км²</p>
    <p>{t("joy")}: {a.ish_joyi_soni}</p>
  </div>
</div>
  )
  return (
    <div className={style.Regions}>
      <h1>{t("region")}</h1>
   {map}
    </div>
  );
};
export default Region;
