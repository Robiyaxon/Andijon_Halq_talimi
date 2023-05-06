import React, { useState } from "react";
import style from "./TopHeader.module.css";
import logo from "../../assets/gerb.png";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import telegram from "../../assets/telegran.png";
import {
  FacebookOutlined,
  MailOutlined,
  InstagramOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
const TopHeader = () => {
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  const { t } = useTranslation();

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className={style.Wrapper}>
      <div className={style.img}>
        <img src={logo} alt="" />{" "}
        <span>
          O`zbekiston Respublikasi Oliy ta`lim, fan <br /> va innovatsiyalar
          vazirligi
        </span>
      </div>
      <div className={style.right_place}>
        {/* <div className={style.contact}>
          <a href="">
            <PhoneFilled style={{ color: "#01bacf", fontSize:"21px", marginRight:"0.3rem" }} />
            +9998906747474
          </a>
          <a href="">
            <MailOutlined style={{ color: "#01bacf", fontSize:"21px",marginRight:"0.3rem"}} />
            tuhtaevarobiyahon@gmail.com
          </a>
        </div> */}
        <div className={style.contact}>
          <div className={style.blue}>
            <a href="">
              <FacebookOutlined />
            </a>
          </div>
          <div className={style.blue}>
            <a href="">
              <MailOutlined />
            </a>
          </div>
          <div className={style.blue}>
            <a href="">
              <InstagramOutlined />
            </a>
          </div>
          <div className={style.blue}>
            <a href="">
              <YoutubeFilled />
            </a>
          </div>
        </div>
        <div className={style.select}>
          <select name="lang" value={lang} onChange={handleChange}>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="eng">Eng</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
