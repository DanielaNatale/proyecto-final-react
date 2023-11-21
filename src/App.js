import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './componentes/header';
import Nav from './componentes/nav';
import Footer from './componentes/footer';

import Galeria from './paginas/galeria';
import Home from './paginas/Home';
import Nosotros from './paginas/nosotros';
import Servicios from './paginas/servicios';
import Mapa from './paginas/contacto';




function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/nosotros' element={<Nosotros/>}></Route>
          <Route path='/servicios' element={<Servicios/>}></Route>
          <Route path='/galeria' element={<Galeria/>}></Route>
          <Route path='/contacto' element={<Mapa/>}></Route> 

          </Routes>
      </BrowserRouter>

      <Footer/>

      
    </div >
  );
}

export default App;
