import React from "react";
import "./News.css";
import img1 from "../../assets/news_page.jpg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../../api/API";
import { Link } from "react-router-dom";
const UzbNews = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    instance.get("news/").then((response) => setData(response.data.edu));
  }, []);
  function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

  const map2 = data.map((a, index) => {
    return(
    <a href={a.manba_link} alt="" key={index}>
      <figure className="snip1527">
        <div className="image">
          <img src={img1} alt="" />
        </div>
        <figcaption>
          <div className="date">
            <span className="day">{a.sana}</span>
          </div>
          <h3>{a.title}</h3>
          <p>{a.text.slice(0,100) + '...'}</p>
        </figcaption>
        {/* <a href="/"></a> */}
      </figure>
    </a>
  )});
  return (
    <div className="News_Page">
      <h1>{t("nav4")}</h1>
      {map2}
    </div>
  );
};

export default UzbNews;
