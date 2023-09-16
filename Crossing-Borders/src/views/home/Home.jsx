import React from "react";
import Navbar from "../../components/navBar/NavBar.jsx" 
import Carrusel from "../../components/carrusel/Carrusel.jsx";
import style from './Home.module.css'
import Seccion from "../seccion/Seccion.jsx";
import Unstack from "../../components/unstuck/Unstack.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Home() {
    return (
      <div className={style.pageContainer} >
        <Navbar />
        <Carrusel/>
        <Seccion/>
        <Unstack/>
        <Footer />
        
        
  
        
       
      </div>
    );
  }

export default Home;
