import React from "react";
import Navbar from "../../components/navBar/NavBar.jsx" 
import Carrusel from "../../components/carrusel/Carrusel.jsx";
import style from './Home.module.css'
import Card from "../../components/card/Card.jsx";
import Seccion from "../seccion/Seccion.jsx";
import { camisetas } from "../../../Data.js";

function Home() {
    return (
      <div className={style.pageContainer} >
        <Navbar />
        <Carrusel/>
        <Seccion />
        <div className={style.cardContainer}>
      {camisetas.map((camiseta, index) => (
        <Card key={index} camiseta={camiseta} />
      ))}
    </div>
        
       
      </div>
    );
  }

export default Home;
