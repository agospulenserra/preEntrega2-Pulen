import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <ul className={styles.ulFooter}>
            <li>Productos</li>
            <li>Contacto</li>
            <li>Sobre nosotros</li>
        </ul>
        <div className={styles.div1Footer}>
            <h3>Dakota tienda online</h3>
            <p>2023, Todos los derechos reservados</p>
        </div>
        <div className={styles.div2Footer}>
            <p>Seguinos en nuestras redes sociales</p>
        </div>   
    </div>
  )
}

export default Footer