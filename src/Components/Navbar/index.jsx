import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = ({carritoIcono}) => {

  return (

    <div className={styles.container}>
      <Link to="/">
        <p>Dako<span>ta</span></p>
      </Link>
      <ul className={styles.listaNav}>
          <li>Productos</li>
          <li>Sobre nosotros</li>
      </ul>
      <div className={styles.carritoDiv}>
          <img src={carritoIcono} alt="icono del carrito" width="30" height="30"/>
          <p className={styles.pCarrito}>(0)</p>
      </div>
    </div>

  )

}

export default Navbar