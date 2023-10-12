import React from "react";
import {TbBrandTelegram } from "react-icons/tb";
import style from "./Contact.module.css";
import { useTranslation } from "react-i18next";
import {MailOutlined } from "@ant-design/icons";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className={style.Contact}>
      <h1 className={style.title}>{t("Boglanish")}</h1>
      <div className={style.main_block}>
        <h2>{t("adrecc")}:</h2>
        <p>{t("des")}</p>
      </div>
      <div className={style.Tel}>
        <h2>{t("phone")}</h2>
        <a href="tel:+998742281002">+998742281002</a>
      </div>
      <div className={style.faks}>
        <h2>{t("fax")}</h2>
        <p>+998742281002</p>
      </div>
      <div className={style.pochta}>
        <h2>{t("email")}:</h2>
        <a href="mailto:andijon@markaz.uz">andijon@markaz.uz</a>
      </div>
      <div className={style.links}>
        <h2>{t("social_media")}</h2>
        <div className={style.social_net}>
        <a href="https://t.me/OTFIV_Andijon">
              <TbBrandTelegram />
            </a>
            <a href="mailto:And_OTIF@mail.ru">
              <MailOutlined />
            </a>
            
        </div>
      </div>
    </div>
  );
};

export default Contact;
