import React from 'react';
import styles from './navbar.module.css';

const Navbar = ({carritoIcono}) => {
  return (
    <div className={styles.container}>
        <p>Dako<span>ta</span></p>
        <ul className={styles.listaNav}>
            <li>Productos</li>
            <li>Sobre nosotros</li>
        </ul>
        <div className={styles.carritoDiv}>
            <img src={carritoIcono} alt="icono del carrito" width="40" height="40"/>
            <p className={styles.p}>(0)</p>
        </div>
    </div>
  )
}

export default Navbar