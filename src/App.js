import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componentes/header'; 
import Nav from './componentes/nav';
import Footer from './componentes/footer';




function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav/>
      </BrowserRouter>

      <Footer/>

      
    </div>
  );
}

export default App;
