import React from 'react';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => (
  <div className={styles.grid}>
    {products.map((product) => (
      <div key={product.id} className={styles.productCard}>
        <img src={product.imageUrl} alt={product.name} className={styles.image} />
        <h2 className={styles.name}>{product.name}</h2>
        <p>{product.description}</p>
        <p>Цвет: {product.color}</p>
        <p>Категория: {product.category}</p>
        <p>Цена: ${product.price}</p>
        <p>Рейтинг: {product.rating}</p>
      </div>
    ))}
  </div>
);

export default ProductList;