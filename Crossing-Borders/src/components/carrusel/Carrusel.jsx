import React from "react";

import styles from './Carrusel.module.css'

function Carrusel() {
  return (
    <div >
      <section className={styles.carrusel}>
        <img
          className={styles.image}
          src="https://i.postimg.cc/d17mrHGt/c1f8e9fccef946a7d7355d3b20060f58.jpg"
          alt=""
        />
        <img
          className={styles.image}
          src="https://i.postimg.cc/pTgQZfBQ/camiseta-messi.png"
          alt=""
        />
        <img
          className={styles.image}
          src="https://i.postimg.cc/rpZNdX0P/images.jpg"
          alt=""
        />
        <img
          className={styles.image}
          src="https://i.postimg.cc/XqdfDr2R/lionel-messi-player-back-shirt-messi-10-blue-maroon-and-yellow-soccer-jersey-wallpaper-preview.jpg"
          alt=""
        />
        <img
          className={styles.image}
          src="https://i.postimg.cc/2jZ75tz0/Messi-world-cup-argentina-vs-poland-10.png"
          alt=""
        />

      </section>
    </div>
  );
}

export default Carrusel;
