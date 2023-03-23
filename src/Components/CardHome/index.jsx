import { Link } from 'react-router-dom';
import styles from './cardHome.module.css'

const CardHome = ({product}) => {
  return (
    <Link to={`${product.id}`}>
      <div className={styles.container}>
        <h3>{product.title}</h3>
        <img
          src={product.image}
          alt={product.title}
          width="200"
          height="250"
        />
        <p>$ {product.price}</p>
      </div>
    </Link>
  )
}

export default CardHome