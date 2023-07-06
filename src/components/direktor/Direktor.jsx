import React, { useEffect, useState } from "react";
import style from "./Direktor.module.css";
import { instance } from "../../api/API";
import DirektorFoto from "../direktor_foto/Direktor_foto";
import { useTranslation } from "react-i18next";
const Direktor = () => {
  const [state, setState] = useState(false);
  const [data, setData] = useState([]);
  const {t}=useTranslation()
  useEffect(() => {
    instance.get("rahbarlar/").then((response) => setData(response.data));
  }, [setData]);
  const map2 = data.map((a) => (
    <div className={style.block} key={a.id}>
      <img src={a.img} alt="" />
      <div className={style.main}>
        <h2>{a.uz_ism_familiya}</h2>
        <div className={style.contact}>
          <a href="tel:+998742281002">{a.telefon}</a>
          <a href="mailto:And_OTIF@mail.ru">{a.mail}</a>
        </div>
        <h4>{a.uz_qabul_qilish}</h4>
        <button onClick={() => setState(!state)}>{t("button")}</button>
      </div>
      {!state ? null : (
        <div className={style.closeOpen}>
          <h1>{t("direktor2")}</h1>
          <p>
            <strong>{a.ism_familiya}</strong> Oliy taʼlim, fan va innovatsiyalar
            vazirligining Andijon viloyati hududiy boshqarmasi boshligʻi
            lavozimiga tayinlandi.
            <br />
            <br />
            M.Madazimov 1989-yil Andijon viloyatida tugʻilgan.
            <br />
            <br />
            <strong>2012-yilda </strong> Andijon qishloq xoʻjaligi instituti
            (bakalavr)
            <br />
            <strong>2015-yilda </strong> Andijon mashinasozlik instituti
            magistraturasi
            <br />
            <strong> 2017-yilda </strong> Toshkent davlat agrar universiteti
            Andijon filialining tayanch doktoranturasini tamomlagan.
            <br />
            <br />
            Tayinlovga qadar Andijon viloyati hududiy Innovatsion rivojlanish
            boshqarmasi boshligʻi lavozimida faoliyat yuritgan.
          </p>
        </div>
      )}
    </div>
  ));
  return (
    <div>
      <DirektorFoto />
      <div className={style.body}>
        <h1 className={style.title}>{t("director")}</h1>
        {map2}
        <div className={style.Direktor_foto}></div>
      </div>
    </div>
  );
};

export default Direktor;
