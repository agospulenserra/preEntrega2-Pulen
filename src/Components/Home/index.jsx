import React from 'react';
import CardHome from '../CardHome';
import styles from './home.module.css';

const Home = ({products}) => {
  return (
    <div>
        <div className={styles.hero}>
            <p>New in</p>
        </div>
        <section className={styles.section}>
            <h1>Dakota Tienda Online</h1>
            <p>Productos destacados</p>
            <div className={styles.div}>
                {products.map((product) => (
                    <CardHome key={product.id} product={product}/>
                ))}
            </div>
        </section>
        
    </div>
  )
}

export default Home