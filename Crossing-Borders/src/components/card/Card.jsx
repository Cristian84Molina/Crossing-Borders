import React from "react";
import style from './Card.module.css';

function Card({ camiseta }) {
  return (
    <div className={style.card}>
      <img
        className={style.image}
        src={camiseta.imagenes[0]} // Muestra la primera imagen de la camiseta
        alt={camiseta.Club}
      />
      <div className={style.info}>
        <h2 className={style.club}>{camiseta.Club}</h2>
        <p className={style.detalle}>{camiseta.detalle}</p>
        <p className={style.precio}>Precio: € {camiseta.precio}</p>
        <p className={style.codigo}>Código: {camiseta.codigo}</p>
      </div>
    </div>
  );
}

export default Card;
