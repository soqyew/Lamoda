import React, { useEffect } from 'react';
import styles from './FilterBar.module.css';


const FilterBar = ({ filters, setFilters, products, setFilteredProducts }) => {
  const availableColors = ["Красный", "Синий", "Зеленый", "Черный", "Белый"].sort();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleColorChange = (color) => {
    setFilters((prevFilters) => {
      const selectedColors = prevFilters.colors || [];
      if (selectedColors.includes(color)) {
        return { ...prevFilters, colors: selectedColors.filter(c => c !== color) };
      } else {
        return { ...prevFilters, colors: [...selectedColors, color] };
      }
    });
  };

  useEffect(() => {
    const filtered = products.filter((product) => {
      const nameMatch = product.name && product.name.toLowerCase().includes(filters.search.toLowerCase());
      const descriptionMatch = product.description && product.description.toLowerCase().includes(filters.search.toLowerCase());
      const searchMatch = nameMatch || descriptionMatch;

      const minPrice = filters.minPrice ? Number(filters.minPrice) : 0;
      const maxPrice = filters.maxPrice ? Number(filters.maxPrice) : Infinity;
      const priceMatch = product.price >= minPrice && product.price <= maxPrice;

      const colorMatch = filters.colors ? filters.colors.length === 0 || filters.colors.includes(product.color) : true;

      return searchMatch && priceMatch && colorMatch;
    });

    setFilteredProducts(filtered);
  }, [filters, products, setFilteredProducts]);

  return (
    <div className={styles.filterBar}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={filters.search}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
      <p className={styles.searchP}>Price sorting</p>
      <div className={styles.priceInputs}>
        <input
          type="number"
          name="minPrice"
          placeholder="min"
          value={filters.minPrice}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="max"
          value={filters.maxPrice}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>
      <p className={styles.colorFilterTitle}>Color Filter</p>
      <div className={styles.colorFilters}>
        {availableColors.map((color, index) => (
          <label key={color} className={styles.colorCheckbox}>
            <input
              type="checkbox"
              checked={filters.colors ? filters.colors.includes(color) : false}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;