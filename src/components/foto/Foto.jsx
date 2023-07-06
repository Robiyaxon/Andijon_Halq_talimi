import React from "react";

import i1 from "../../assets/picture4.jpg";
import i2 from "../../assets/picture4.jpg";
import i3 from "../../assets/picture1.png";
import i4 from "../../assets/picture1.jpg";
import i7 from "../../assets/news5.jpg";
import i8 from "../../assets/news2.jpg";
import { Image } from "antd";

import styles from "./Foto.module.css";
import { useTranslation } from "react-i18next";

const Foto = () => {
  const { t } = useTranslation();
  return (
    <div id="photo" className={styles.wrap}>
      <h1>{t("foto")}</h1>
      <div className={styles.main}>
        <Image className={styles.i1} src={i1} alt="" />

        <div className={styles.i1_block}>
          <Image className={styles.i2} src={i2} alt="" />
          <Image className={styles.i3} src={i3} alt="" />
        </div>
        {/* 
        <Image className={styles.i5} src={i5} alt="" /> */}

        <div className={styles.i2_block}>
          <Image className={styles.i4} src={i4} alt="" />
          <Image className={styles.i7} src={i7} alt="" />
          <Image className={styles.i8} src={i8} alt="" />
        </div>
        {/* <Image className={styles.i9} src={i9} alt="" />
        <Image className={styles.i10} src={i10} alt="" />
        <Image className={styles.i6} src={i6} alt="" /> */}
      </div>
    </div>
  );
};

export default Foto;
