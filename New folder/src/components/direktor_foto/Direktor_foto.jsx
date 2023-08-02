import React from "react";
import { Carousel } from "antd";
import img from "../../assets/direktor3.jpg";
import img2 from "../../assets/direktor4.jpg";
import img3 from "../../assets/direktor56.jpg";
import style from "../home/header/Header.module.css";
import { useEffect } from "react";
import { instance } from "../../api/API";
import { useState } from "react";
const Direktor_Foto = () => {
  //   const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    instance.get("rahbarlar/").then((response) => setData(response.data));
  }, [setData]);
  return (
    <div className={style.about_me}>
      <Carousel effect="fade" autoplay autoplaySpeed={3000} swipeable={false}>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </Carousel>
      <div className={style.text_content}>
        <h1>
          {data.map((a) => (
            <>{a.uz_ism_familiya}</>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Direktor_Foto;
