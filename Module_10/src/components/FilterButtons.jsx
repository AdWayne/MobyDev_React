import React from 'react';

const FilterButtons = React.memo(({ currentFilter, onFilterChange }) => {
  console.log('Рендер FilterButtons');

  return (
    <div style={styles.container}>
      <button
        onClick={() => onFilterChange('all')}
        style={{
          ...styles.filterBtn,
          backgroundColor: currentFilter === 'all' ? '#42b983' : '#e0e0e0',
          color: currentFilter === 'all' ? '#fff' : '#333',
        }}
      >
        Все пользователи
      </button>
      <button
        onClick={() => onFilterChange('favorites')}
        style={{
          ...styles.filterBtn,
          backgroundColor: currentFilter === 'favorites' ? '#42b983' : '#e0e0e0',
          color: currentFilter === 'favorites' ? '#fff' : '#333',
        }}
      >
        Только избранные
      </button>
    </div>
  );
});

FilterButtons.displayName = 'FilterButtons';

const styles = {
  container: { display: 'flex', gap: '10px', marginBottom: '20px' },
  filterBtn: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default FilterButtons;