import React from "react";
import style from "./Unstack.module.css";
import { camisetas } from "../../../Data";
import Card from "../card/Card";

function Unstack() {
  return (
    <div className={style.pageContainer}>
      <h1 className={style.titulo}>---------------------------------------------------</h1>  
      <h1 className={style.titulo}>DESTACADAS</h1>
      <div className={style.cardContainer}>
        {camisetas.slice(0,4).map((camiseta, index) => (
          <Card key={index} camiseta={camiseta} />
        ))}
      </div>
      <h1 className={style.titulo}>---------------------------------------------------</h1>  
    </div>
  );
}

export default Unstack;
