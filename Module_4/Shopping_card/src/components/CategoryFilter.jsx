function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="filter">
      {categories.map(category => (
        <button
          key={category}
          className={`button ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;