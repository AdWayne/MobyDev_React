function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Корзина</h2>

      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart__item">
              <span>{item.name} — {item.price} тг</span>
              <button
                className="button button--danger"
                onClick={() => removeFromCart(index)}
              >
                ✕
              </button>
            </div>
          ))}

          <div className="cart__total">
            Итого: {totalPrice} тг
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;