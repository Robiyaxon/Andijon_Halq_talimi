import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../api/API";
import { useEffect } from "react";
import NewsHeader from "./NewHeader";
import style from "./NewsSingle.module.css"
const NewsSingle = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    instance.get("news/").then((response) => setData(response.data.local));
  }, []);
  let { id } = useParams();
  const result = data.filter((num) => num.id == id);
  const map2 = result.map((a) => (
    <div className={style.Header} key={a.id}>
      <h1>{a.uz_title}</h1>
      <p>{a.date}</p>
      <p>{a.uz_text}</p>
      <div className={style.IMG}>
        <img src={"https://otfiv-andijon-admin.uz/" + a.img} alt="" />
        {a.img_2 ? (
          <img src={"https://otfiv-andijon-admin.uz/" + a.img_2} alt="" />
        ) : (
          <></>
        )}
        {a.img_3 ? (
          <img src={"https://otfiv-andijon-admin.uz/" + a.img_3} alt="" />
        ) : (
          <></>
        )}
      </div>
    </div>
  ));
  return (
    <div>
      <NewsHeader result={result} />
      {map2}
    </div>
  );
};

export default NewsSingle;
