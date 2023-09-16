import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { camisetas } from "../../../Data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Detail.module.css"; // Importa los estilos
import Navbar from "../../components/navBar/NavBar";
import { Link } from "react-router-dom";



function Detail() {
  const { codigo } = useParams();
  const camiseta = camisetas.find((camiseta) => camiseta.codigo === codigo);
  const navigate = useNavigate();

  if (!camiseta) {
    return (
      <div className={styles.detailContainer}>No se encontró la camiseta.</div>
    );
  }
  const handleComprarClick = () => {
    // Reemplaza el número de WhatsApp con el que deseas comunicarte
    const numeroWhatsApp = '+34613603503';

    // Construye la URL de WhatsApp con el número
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}`;

    // Abre una nueva ventana del navegador con la URL de WhatsApp
    window.location.href = urlWhatsApp;
  };

  return (
    <div>
      <Navbar />
    <div className={styles.detailContainer}>
      <Link className={styles.volverButton}  onClick={() => navigate(-1)}> Volver </Link>
      <div className={styles.leftColumn}>
        <h2>{camiseta.Club}</h2>
        <p>{camiseta.detalle}</p>
        <p>Tallas disponibles: S, L, XL, XXL</p>
        <button  className={styles.comprar} onClick={handleComprarClick}>Comprar</button>
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
    </div>
  );
}

export default Detail;
