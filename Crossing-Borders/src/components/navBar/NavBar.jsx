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
      
    </div>
  );
}

export default Navbar;
