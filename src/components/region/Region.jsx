import React from "react";
import style from "./Region.module.css";
import img1 from "../../assets/news1.jpg";
const Region = () => {
  return (
    <div className={style.Regions}>
      <h1>Инновацион ҳудудлар</h1>
      <div className={style.cards}>
        <h1>Andijon shahar - Oltinko`l tumani</h1>
        <img src={img1} alt="" />
        <div className={style.wrapper}>
          <p>axoli:200</p>
          <p>Инновацион лойиҳалар: 14</p>
          <p>Майдон: 2 110 км²</p>
          <p>Яратилган иш жойи: 150</p>
        </div>
      </div>
      <div className={style.cards}>
        <h1>Andijon shahar Asaka tumani</h1>
        <img src={img1} alt="" />
        <div className={style.wrapper}>
          <p>Axoli:200</p>
          <p>Инновацион лойиҳалар: 14</p>
          <p>Майдон: 2 110 км²</p>
          <p>Яратилган иш жойи: 150</p>
        </div>
      </div>
      <div className={style.cards}>
        <h1>Andijon shahri Bo`z tumani</h1>
        <img src={img1} alt="" />
        <div className={style.wrapper}>
          <p>axoli:200</p>
          <p>Инновацион лойиҳалар: 14</p>
          <p>Майдон: 2 110 км²</p>
          <p>Яратилган иш жойи: 150</p>
        </div>
      </div>
    </div>
  );
};
export default Region;
