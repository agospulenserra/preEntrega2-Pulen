import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import styles from './itemDetailContainer.module.css';

function ItemDeatilContainer({product}) {
  return (

    <section className={styles.section}>

        <Carousel slide={false} className={styles.carousel}>
            <Carousel.Item>
                <img className="d-block w-100" src={product.img1} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={product.img2} alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={product.img3} alt="Third slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={product.img4} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>

        <h2 className={styles.h2}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.talles}>{product.talles}</p>
        <p className={styles.colores}>{product.colores}</p>
        <p className={styles.precio}>{product.precio}</p>

    </section>

    
  );
}

export default ItemDeatilContainer;