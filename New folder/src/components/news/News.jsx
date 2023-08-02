import React from "react";
import "./News.css";
import img1 from "../../assets/news_page.jpg";
import img2 from "../../assets/news_page2.jpg";
import img3 from "../../assets/news_page4.jpg";
import img4 from "../../assets/news_page5.jpg";
import { useTranslation } from "react-i18next";
const News = () => {
  const { t } = useTranslation();

  const map = [
    {
      id: 1,
      img: img1,
      day: 3,
      month: "dec",
      title: "Xalqaro hamkorlik ",
      description: "",
    },
    {
      id: 2,
      img: img2,
      day: 3,
      month: "dec",
      title:
        "Yoshlar akademiyasiga a'zolikka qabul qilingan yoshlarga a'zolik sertifikatlari topshirildi deb bularni",
      description: "",
    },
    {
      id: 3,
      img: img3,
      day: 3,
      month: "dec",
      title: "Jahon banki vakillari tomonidan tashkil qilingan seminar",
      description: "",
    },
    {
      id: 4,
      img: img4,
      day: 4,
      month: "dec",
      title: "Andijon yoshlar texnoparki a'zolari Koreya davlatida",
      description: "",
    },
  ];
  const map2 = map.map((a) => (
    <figure className="snip1527" key={a.id}>
      <div className="image">
        <img src={a.img} alt=""/>
      </div>
      <figcaption>
        <div className="date">
          <span className="day">{a.day}</span>
          <span className="month">{a.month}</span>
        </div>
        <h3>{a.title}</h3>
        <p>{a.description}</p>
      </figcaption>
      <a href="/"></a>
    </figure>
  ));
  return (
    <div className="News_Page">
      <h1>{t("nav4")}</h1>
      {map2}
      {map2}
    </div>
  );
};

export default News;
