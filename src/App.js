import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonsPage from './Pages/PokemonsPage';
import GenerationPage from './Pages/GenerationPage';
import { Nav } from 'react-bootstrap';
import Footer from './Components/Footer';


function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path=""  element={<PokemonsPage />} /> 
        <Route path="/pokemons"  element={<PokemonsPage />} />
        <Route path="/generations"  element={<GenerationPage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  </>;
}

export default App;
