import React from "react";
import styles from "./ComoComprar.module.css";
import Navbar from "../navBar/NavBar";

function ComoComprar() {
  // Número de WhatsApp del vendedor
  const numeroWhatsApp = "+34613603503"; // Reemplaza con el número correcto

  // Función para abrir la ventana de WhatsApp
  const contactarVendedor = () => {
    // Construye la URL de WhatsApp con el número del vendedor
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}`;

    // Abre una nueva ventana del navegador con la URL de WhatsApp
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <div className={styles.comoComprar}>
      <Navbar />
      <h2>Cómo Comprar Camisetas</h2>
      <ol>
        <li>
          <strong>Paso 1:</strong> Explore nuestra colección de camisetas para
          encontrar su diseño favorito.
        </li>
        <li>
          <strong>Paso 2:</strong> Haga clic en la camiseta que desea comprar
          para ver más detalles y opciones de tallas y colores.
        </li>
        <li>
          <strong>Paso 3:</strong> Una vez que haya elegido su camiseta
          preferida, haga clic en el botón "Comprar" que se encuentra en la
          página del producto.
        </li>
        <li>
          <strong>Paso 4:</strong> Será redirigido a WhatsApp, donde podrá
          contactar directamente con nuestro vendedor para confirmar detalles
          adicionales, como la talla, la forma de pago y el método de envío.
        </li>
        <li>
          <strong>Paso 5:</strong> Nuestro vendedor le proporcionará
          información sobre cómo completar su compra y responderá cualquier
          pregunta que pueda tener.
        </li>
        <li>
          <strong>Paso 6:</strong> ¡Listo! Una vez que haya confirmado su
          pedido con nuestro vendedor, le proporcionaremos los detalles de
          pago y enviaremos su camiseta tan pronto como sea posible.
        </li>
      </ol>

      <p>
        Si tiene alguna pregunta antes de realizar su compra o necesita
        asistencia adicional, no dude en contactarnos a través de WhatsApp.
      </p>

      <button className={styles.comprarButton} onClick={contactarVendedor}>
        Contactar al Vendedor (WhatsApp)
      </button>
    </div>
  );
}

export default ComoComprar;
