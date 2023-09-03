import React from "react";

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
      <div className={styles.navLinks}>
        <a className={styles.navLink} href="#">
          Login
        </a>
        <a className={styles.navLink} href="#">
          Sign In
        </a>
      </div>
    </div>
  );
}

export default Navbar;
