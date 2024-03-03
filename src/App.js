
import styles from './App.css';


//import {BrowserRouter , Routes, Route} from "react-router-dom";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

//Pages
import Home from  "./pages/Home/Home.js";
import Sobre from "./pages/Sobre/Sobre.js";
import Portifolio from "./pages/Projetos/Projetos.js";
import Contato from "./pages/Contato/Contato.js";

//Components
import Navbar from "./components/Navbar.js";
import Footer from  "./components/Footer.js";








function App() {

  

  return (
    <div className={`${styles.App}`}>
   
    <BrowserRouter>
    

        <Navbar />
        <div className='container'>
        <Switch>
          <Route path="/" element={<Home/> } />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Portifolio" element={<Portifolio />} />
          <Route path="/Contato" element={<Contato />} />
         
          </Switch>
        
         
        </div>
       
        <Footer />
       
      
        </BrowserRouter>
      
    </div>
    
  
  );
}

export default App;
