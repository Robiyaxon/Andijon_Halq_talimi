import React from "react";
import Header from "./header/Header";
// import Hizmat from './hizmat/Hizmat'
// import { Service } from "./hizmat/Servises";
// import News from "../news/News";
import Links from "../links/Links";
import Contact from "../contat/Contact";
import Foto from "../foto/Foto";
import { MyMap } from "./map/Map";
import News2 from "../news/News2";
const Home = () => {
  return (
    <div>
      <Header />
      {/* <Service /> */}
      <News2 />

      <Foto />
      <Links />
      <MyMap />
      <Contact />
    </div>
  );
};

export default Home;
