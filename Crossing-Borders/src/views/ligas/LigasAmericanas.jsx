import React from "react";
import Navbar from "../../components/navBar/NavBar";
import style from "./Ligas.module.css";
import { camisetas } from "../../../Data";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

function LigasAmericanas() {
  // Filtra las camisetas que incluyen el continente "Europa"
  const camisetasEuropa = camisetas.filter((camiseta) => camiseta.continente === "America");

  return (
    <div className={style.pageContainer}>
      <Navbar />
      <div className={style.cardContainer}>
        {camisetasEuropa.map((camiseta, index) => (
          <Card key={index} camiseta={camiseta} />
        ))}
      </div>
      <Link to="/Home" className={style.homeButton}>
        Volver a Home
      </Link>
    </div>
  );
}

export default LigasAmericanas;
