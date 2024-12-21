import React, { useEffect } from 'react';
import styles from './SortOptions.module.css'; // Не забудьте добавить стили

const SortOptions = ({ sort, setSort, products, setSortedProducts }) => {
  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sort === 'cheap') return a.price - b.price;
      if (sort === 'expensive') return b.price - a.price;
      if (sort === 'popular') return b.rating - a.rating; 
      return 0;
    });

    setSortedProducts(sortedProducts);
  }, [sort, products, setSortedProducts]);

  const handleSortChange = (newSort) => {
    setSort(newSort);
  };

  return (
    <div className={styles.sortOptions}>
      <span>Sorting</span>
      <div className={styles.buttonContainer}>
        <button 
          className={sort === 'cheap' ? styles.active : ''} 
          onClick={() => handleSortChange('cheap')}
        >
          Cheap first
        </button>
        <button 
          className={sort === 'expensive' ? styles.active : ''} 
          onClick={() => handleSortChange('expensive')}
        >
          Expensive first
        </button>
        <button 
          className={sort === 'popular' ? styles.active : ''} 
          onClick={() => handleSortChange('popular')}
        >
          Popular
        </button>
      </div>
    </div>
  );
};

export default SortOptions;