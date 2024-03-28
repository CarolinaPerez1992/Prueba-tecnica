import './App.css';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Inicio from './pages/Inicio'
import Movies from './pages/Movies';
import Series from './pages/Series';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<Inicio/>}></Route>
        <Route path="/movies" element= {<Movies/>}></Route>
        <Route path="/series" element= {<Series/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
