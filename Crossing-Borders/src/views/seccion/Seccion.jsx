import React from "react";
import style from "./Seccion.module.css"

function Seccion() {
    return (
        <div className={style.container}>
          <div className={style.card}>
            <img
              className={style.image}
              src="https://i.postimg.cc/QMqdcKzF/mapa-grande-satelite-detallado-de-europa-en-la-noche.jpg"
              alt="Ligas Europeas"
            />
            <div className={style.overlay}>
              <h2 className={style.title}>Ligas Europeas</h2>
              <a href="/ligas-europeas" className={style.link}>
                Ver más
              </a>
            </div>
          </div>
    
          <div className={style.card}>
            <img
              className={style.image}
              src="https://i.postimg.cc/qvyRM5XX/Bkup-An0-CYAE4gp-W.jpg"
              alt="Ligas de América"
            />
            <div className={style.overlay}>
              <h2 className={style.title}>Ligas de América</h2>
              <a href="/ligas-america" className={style.link}>
                Ver más
              </a>
            </div>
          </div>
    
          <div className={style.card}>
            <img
              className={style.image}
              src="https://i.postimg.cc/PqHqLQSG/Night-Earth.jpg"
              alt="Mapa Mundi"
            />
            <div className={style.overlay}>
              <h2 className={style.title}>Mundial</h2>
              <a href="/mundial" className={style.link}>
                Ver más
              </a>
            </div>
          </div>
        </div>
      );
  }

export default Seccion;
