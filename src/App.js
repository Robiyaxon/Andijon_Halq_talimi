import { Route, Routes } from "react-router-dom";
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
        <Route path="yangiliklar" element={<News />} />
        <Route path="paxtachilik" element={<Paxtachilik />} />
        <Route path="tuman" element={<Region />} />
      </Routes>
      <BurgerMenu />
      <Footer />
      {/* <Foto/> */}
    </div>
  );
}

export default App;
