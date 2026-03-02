import { useState } from "react";
import "./styles/main.scss";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CategoryFilter from "./components/CategoryFilter";

const productsData = [
  { id: 1, name: "Книга", price: 500, category: "Книги" },
  { id: 2, name: "Футболка", price: 1500, category: "Одежда" },
  { id: 3, name: "Наушники", price: 3000, category: "Электроника" },
  { id: 4, name: "Штаны", price: 2000, category: "Одежда" },
  { id: 5, name: "Телефон", price: 25000, category: "Электроника" },
];

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const filteredProducts =
    selectedCategory === "Все"
      ? productsData
      : productsData.filter(p => p.category === selectedCategory);

  const categories = ["Все", ...new Set(productsData.map(p => p.category))];

  return (
    <div className="container">
      <h1 className="title">Корзина покупок</h1>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="layout">
        <ProductList products={filteredProducts} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;