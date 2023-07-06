import React, { useState } from "react";
import "./Compititions.css";
import { instance } from "../../api/API";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Compititions = () => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    instance
      .get("tanlovlar/")
      .then((response) => setData(response.data.tanlovalar));
  }, [setData]);
  const data2 = data.map((a) => (
    <div className="box">
      <img className="main-img" src={a.img}/>
      <div className="box-content">
        <a href={a.link} className="PageameNavlink">
          {" "}
          <div className="item">{a.title}</div>
          <div className="description show-animate">
            {a.title} <br />
            <span>{a.sana}</span>
            <br />
            <span>{a.mudat}</span>
          </div>
        </a>
      </div>
    </div>
  ));
  return (
    <div className={"PrejectName"}>
      <h1>{t("Choices")}</h1>
      <div className="wrapper">{data2}</div>
    </div>
  );
};

export default Compititions;
