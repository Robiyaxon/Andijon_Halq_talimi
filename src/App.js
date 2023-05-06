import "./App.css";
import Foto from "./components/foto/Foto";
import Home from "./components/home/Home";
import Header from "./components/home/header/Header";
// import Page from "./components/loading/Loading";
import Navbar from "./components/navbar/Navbar";
import TopHeader from "./components/topheader/TopHeader";

function App() {
  return (
    <div className="App">
      {/* <Page /> */}
      <TopHeader />
      <Navbar />
      {/* <Header /> */}
      <Home/>
      {/* <Foto/> */}
    </div>
  );
}

export default App;
