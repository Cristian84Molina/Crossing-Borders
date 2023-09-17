import React from "react";
import Navbar from "../../components/navBar/NavBar";
import style from "./Ligas.module.css";
import { camisetas } from "../../../Data";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

function Mundial() {
  // Filtra las camisetas que incluyen el continente "Mundial"
  const camisetasMundial = camisetas.filter((camiseta) => camiseta.continente === "Mundial");

  // Verificar si no hay coincidencias en el filtro
  if (camisetasMundial.length === 0) {
    return (
      <div className={style.pageContainer}>
        <Navbar />
        <p style={{ fontSize: "24px", color: "white" }}>
          No sé si el fútbol es el deporte más allá de la vida,
        </p>
        <p style={{ fontSize: "24px", color: "white" }}>
          pero lo que sí sé es que el fútbol es la vida.
        </p>
        <p style={{ fontSize: "24px", color: "white" }}>
         - Diego Armando Maradona -
        </p>
        <Link to="/Home" className={style.homeButton}>
          Volver a Home
        </Link>
      </div>
    );
  }

  return (
    <div className={style.pageContainer}>
      <Navbar />
      <Link to="/Home" className={style.homeButton}>
        Volver a Home
      </Link>
      <div className={style.cardContainer}>
        {camisetasMundial.map((camiseta, index) => (
          <Card key={index} camiseta={camiseta} />
        ))}
      </div>
    </div>
  );
}

export default Mundial;
