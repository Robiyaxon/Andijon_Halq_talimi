import React from "react";
import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import img from "../../../assets/picture1.jpg";
import img2 from "../../../assets/picture2.jpg";
import img3 from "../../../assets/picture3.jpg";
import img4 from "../../../assets/picture7.jpg";
import img5 from "../../../assets/picture8.jpg";
import img6 from "../../../assets/picture9.jpg";

import style from "./Header.module.css";

const Header = () => {
  const { t } = useTranslation();
  
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
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
        <div>
          <img src={img6} alt="" />
        </div>
    </Carousel>
      <div className={style.text_content}>
        <h1>
          {t('companyName')}
        </h1>
      </div>
    </div>
  );
};

export default Header;
