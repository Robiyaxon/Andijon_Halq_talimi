import React from "react";
import style from "./Header.module.css";
import img from "../../assets/picture1.jpg";
import img2 from "../../assets/picture2.jpg";
import img3 from "../../assets/picture3.jpg";
import { Carousel } from "antd";
const Header = () => {
  return (
    <div className={style.about_me}>
      <Carousel autoplay>
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
          O`zbekiston Respublikasi <br /> ..... Vazirligi
        </h1>
      </div>
    </div>
  );
};

export default Header;
