import React, { useEffect, useState } from "react";
import style from "./Region.module.css";
import img1 from "../../assets/news1.jpg";
import { instance } from "../../api/API";
const Region = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    instance
      .get("hududlar/")
      .then((response) => setData(response.data));
  }, [setData]);
const map=data.map(a=>
  <div className={style.cards}>
  <h1>{a.manzil}</h1>
  <img src={img1} alt="" />
  <div className={style.wrapper}>
    <p>axoli:{a.aholi}</p>
    <p>Инновацион лойиҳалар: {a.loyhalar_soni}</p>
    <p>Майдон: {a.maydoni} км²</p>
    <p>Яратилган иш жойи: {a.ish_joyi_soni}</p>
  </div>
</div>
  )
  return (
    <div className={style.Regions}>
      <h1>Инновацион ҳудудлар</h1>
   {map}
    </div>
  );
};
export default Region;
