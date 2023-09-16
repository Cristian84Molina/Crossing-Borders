import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img
        className={styles.image}
        src="https://i.postimg.cc/d3Rg8VKB/logo-o.png"
        alt=""
      />

      <img
        className={styles.image2}
        src="https://i.postimg.cc/vTyNHw66/CB.png"
        alt=""
      />
      <Link to="/Home" className={styles.homeButton}>
        Home
      </Link>


      <Link to="/comoComprar" className={styles.homeButton}>
        ¿¿Como Comprar??
      </Link>
      
      <a
          href="https://wa.me/+34613603503"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacto
        </a>
    </div>
  );
}

export default Navbar;
