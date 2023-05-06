import React from "react";
import Header from "./header/Header";
// import Hizmat from './hizmat/Hizmat'
import { Service } from "./hizmat/Servises";
import News from "../news/News";
import Links from "../links/Links";
import Contact from "../contat/Contact";
import Foto from "../foto/Foto";
const Home = () => {
  return (
    <div>
      <Header />
      {/* <Service /> */}
      <News />
      {/* <Links/> */}
      <Foto/>
      <Contact/>
    </div>
  );
};

export default Home;
