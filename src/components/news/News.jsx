import React from "react";
import "./News.css";
import img1 from "../../assets/news1.jpg";
import img2 from "../../assets/news2.jpg";
import img3 from "../../assets/news4.png";
import img4 from "../../assets/news5.jpg";
const News = () => {
  const map = [
    {
      id: 1,
      img: img1,
      day: 3,
      month: "dec",
      title:
        "Нефть ва газ конлари геологияси ва қидируви институти томонидан якунланган ва..",
      description: "",
    },
    {
      id: 2,
      img: img2,
      day: 3,
      month: "dec",
      title:
        "Нефть ва газ конлари геологияси ва қидируви институти томонидан якунланган ва..",
      description: "",
    },
    {
      id: 3,
      img: img3,
      day: 3,
      month: "dec",
      title:
        "Нефть ва газ конлари геологияси ва қидируви институти томонидан якунланган ва..",
      description: "",
    },
    {
      id: 4,
      img: img3,
      day:4,
      month: "dec",
      title:
        "Нефть ва газ конлари геологияси ва қидируви институти томонидан якунланган ва..",
      description: "",
    },
  ];
  const map2 = map.map((a) => (
    <figure className="snip1527" key={a.id}>
      <div className="image">
        <img src={a.img} />
      </div>
      <figcaption>
        <div className="date">
          <span className="day">{a.day}</span>
          <span className="month">{a.month}</span>
        </div>
        <h3>{a.title}</h3>
        <p>{a.description}</p>
      </figcaption>
      <a href="#"></a>
    </figure>
  ));
  return (
    <div className="News_Page">
      <h1>Yangiliklar</h1>
      {map2}
      {map2}
    </div>
  );
};

export default News;
