import React from "react";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";

import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className={style.Navbar}>
      <Button>
        <NavLink to="/">{t("home")}</NavLink>{" "}
      </Button>
      <Button>
        <NavLink to="/ishlar">{t("work")}</NavLink>
      </Button>
      <Button>
        <NavLink to={"/rahbariyat"}>{t("director")}</NavLink>{" "}
      </Button>
      <Dropdown
        menu={{
          items: [
            {
              key: "2",
              label: <NavLink to="/news">{t("region_news")}</NavLink>,
            },
            {
              key: "6",
              label: <NavLink to="/uzb_news">{t("news_uzb")} </NavLink>,
            },
          ],
        }}
        placement="bottomLeft"
        arrow
      >
        <Button>{t("nav4")}</Button>
      </Dropdown>
     
      
      <NavLink to="/tuman"> <Button>{t("nav5")}</Button></NavLink>
      
      <NavLink to="elonlar">
        <Button>{t("Choices")}</Button>
      </NavLink>
      <NavLink to="reyting">
        <Button>{t("reyting")}</Button>
      </NavLink>
    </div>
  );
};

export default Navbar;
