import React, { useState } from 'react';
import ProductList from './components/ProductList';
import FilterBar from './components/FilterBar';
import SortOptions from './components/SortOptions';
import { generateProducts } from './data/generateProducts';
import styles from './styles/AppStyles';

const App = () => {
  const [products] = useState(generateProducts());
  const [filters, setFilters] = useState({ search: '', minPrice: '', maxPrice: '' });
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sort, setSort] = useState('cheap');
  const [sortedProducts, setSortedProducts] = useState(products); 

  return (
    <div className="container" style={styles.container}>
      
      <div style={styles.sidebar}>
        <h1>Lamoda</h1>
        <FilterBar filters={filters} setFilters={setFilters} products={products} setFilteredProducts={setFilteredProducts} />
        <SortOptions sort={sort} setSort={setSort} products={filteredProducts} setSortedProducts={setSortedProducts} />
      </div>
      <div style={styles.productList}>
      {sortedProducts.length > 0 && <p>Products found: {sortedProducts.length}</p>}        {sortedProducts.length > 0 ? (
          <ProductList products={sortedProducts} />
        ) : (
          <p>Nothing was found for your request.</p>
        )}
      </div>
    </div>
  );
};

export default App;