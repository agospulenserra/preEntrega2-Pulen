import { Link } from "react-router-dom";
import CardHome from "../CardHome";
import styles from './itemListContainer.module.css';

const ItemListContainer = ({products}) => {

  return (

    <div className={styles.wrapper}>
        {products.map((product) => (
            <CardHome key={product.id} product={product}/>
        ))}
    </div>

  )

}

export default ItemListContainer