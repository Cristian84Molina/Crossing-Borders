import React from "react";
import { useParams } from "react-router-dom";
import { camisetas } from "../../../Data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Detail.module.css"; // Importa los estilos

function Detail() {
  const { codigo } = useParams();
  const camiseta = camisetas.find((camiseta) => camiseta.codigo === codigo);

  if (!camiseta) {
    return (
      <div className={styles.detailContainer}>No se encontró la camiseta.</div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <div className={styles.leftColumn}>
        <h2>{camiseta.Club}</h2>
        <p>{camiseta.detalle}</p>
        <p>Tallas disponibles: S, L, XL, XXL</p>
        <button>Comprar</button>
      </div>
      <div className={styles.rightColumn}>
        {/* Carrusel de imágenes */}
        <Carousel
          className={styles.carousel}
          showArrows={true}
          showThumbs={true}
        >
          {camiseta.imagenes.map((imagen, index) => (
            <div key={index}>
              <img
                className={styles.mainImage}
                src={imagen}
                alt={`Imagen ${index}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Detail;
