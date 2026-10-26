function ProductItem({ product, addToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price} тг</p>
      <p>{product.category}</p>

      <button
        className="button button--primary"
        onClick={() => addToCart(product)}
      >
        Добавить в корзину
      </button>
    </div>
  );
}

export default ProductItem;