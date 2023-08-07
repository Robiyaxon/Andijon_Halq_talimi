import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import TopHeader from "./components/topheader/TopHeader";
import News from "./components/news/News";
import Direktor from "./components/direktor/Direktor";
import Footer from "./components/footer/Footer";
import FreeJob from "./components/free_job/FreeJob";
import ScrollToTop from "./ScroleOn";



import Paxtachilik from "./components/events/paxtachilik/Paxtachilik";
import Region from "./components/region/Region";
import Compititions from "./components/compititions/Compititions";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import NewsSingle from "./components/news/NewsSingle";
import UzbNews from "./components/news/UzbNews";
function App() {
  return (
    <div className="App">
      {/* <Page /> */}
      <TopHeader />
      <ScrollToTop />
      <Navbar />

      {/* <Header /> */}
      <Routes>


        
        <Route path="/" element={<Home />} />
        <Route path="direktor" element={<Direktor />} />
        <Route path="rahbariyat" element={<Direktor />} />
        <Route path="ishlar" element={<FreeJob />} />
        <Route path="elonlar" element={<Compititions />} />
        <Route path="news/" element={<News/>} />
        <Route path="uzb_news/" element={<UzbNews/>} />
        <Route path="paxtachilik" element={<Paxtachilik />} />
        <Route path="tuman" element={<Region />} />
       
        <Route path="news/:id" element={<NewsSingle />} />
      </Routes>
      <BurgerMenu />
      <Footer />
      {/* <Foto/> */}
    </div>
  );
}

export default App;
