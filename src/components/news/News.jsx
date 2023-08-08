import React from "react";
import "./News.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../../api/API";
import { Link } from "react-router-dom";
const News = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    instance.get("news/").then((response) => setData(response.data.local));
  }, []);
  const map2 = data.map((a) => (
    <Link to={`${a.id}`} key={a.id}>
      <figure className="snip1527" key={a.id}>
        <div className="image">
          <img src={"https://otfiv-andijon-admin.uz/" + a.img} alt="" />
        </div>
        <figcaption>
          <div className="date">
            <span className="day">{a.date}</span>
          </div>
          <h3>{a.uz_title}</h3>
          <p>{a.uz_text.slice(0, 100) + "..."}</p>
        </figcaption>
        {/* <a href="/"></a> */}
      </figure>
    </Link>
  ));
  return (
    <div className="News_Page">
      <h1>{t("nav4")}</h1>
      {!data.length ? "Hozircha ish o'rinlari mavjud emas!" : map2}
    </div>
  );
};

export default News;
