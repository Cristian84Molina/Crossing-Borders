import React from "react";
import Navbar from "../../components/navBar/NavBar.jsx" 
import Carrusel from "../../components/carrusel/Carrusel.jsx";
import style from './Home.module.css'

import Seccion from "../seccion/Seccion.jsx";


function Home() {
    return (
      <div className={style.pageContainer} >
        <Navbar />
        <Carrusel/>
        <Seccion/>
        
        
  
        
       
      </div>
    );
  }

export default Home;
