import React from "react";
import style from "./NewsHeader.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const NewsHeader = (props) => {
  const { t } = useTranslation();

  const map=props.result.map(a=>
   <>
    <div>
      {/* <MobileNav1 /> */}
      <div className={style.HeaderNews}>
        <img src={"https://oliytalim.pythonanywhere.com/" +a.img} alt="rasm bor edi!" />

        <div className={style.BlockLink}>
          <h1 >
           {a.uz_title}
          </h1>
          <NavLink
            to="/"
            className={style.Block1}
          >
         {t("home")}
          </NavLink>
          <a
            href="/news"
            className={style.Block2}
          >
            / {t("nav4")}
          </a>
        </div>
      </div>
    </div>
    </>)
  return (
    <div>
     {map}
    </div>
  );
};
export default NewsHeader;
