import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import TopHeader from './components/topheader/TopHeader';

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <Navbar/>
      <Header/>
    </div>
  );
}

export default App;
