import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => (
  <div className={styles.filter}>
    <label>
      Find contacts by name:
      <input type="text" value={filter} onChange={onFilterChange} />
    </label>
  </div>
);

export default Filter;
