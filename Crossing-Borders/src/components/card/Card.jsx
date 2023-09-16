import React from "react";
import style from './Card.module.css';
import { Link } from "react-router-dom";

function Card({ camiseta }) {
  return (
    <div className={style.card}>
       <Link to={`/details/${camiseta.codigo}`}>

      <img
        className={style.image}
        src={camiseta.imagenes[0]} // Muestra la primera imagen de la camiseta
        alt={camiseta.Club}
      />
       </Link>
      <div className={style.info}>
        <h2 className={style.club}>{camiseta.Club}</h2>
        <p className={style.detalle}>{camiseta.detalle}</p>
        <p className={style.precio}>Precio: € {camiseta.precio}</p>
        <p className={style.codigo}>Código: {camiseta.codigo}</p>
        <h4>
          <Link to={`/details/${camiseta.codigo}`}>Ver Mas</Link>
        </h4>
      </div>
    </div>
  );
}

export default Card;
