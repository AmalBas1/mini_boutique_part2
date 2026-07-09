import { useState} from "react";

import ProductList from "../components/ProductList"; 
import productsData from "../data/products.json"; 
import CategoryFilter from "../components/CategoryFilter";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home  ({products, onDelete, onAddToCart}) {
  
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const displayProducts = selectedCategory === "Tous"
    ? products
    : products.filter((p) => p.categorie === selectedCategory);

  return (
    <div className="Home">
      <CategoryFilter products={products} setCategory={setSelectedCategory}/>
      <ProductList
        products={displayProducts}
        onAddToCart={onAddToCart}
        onDeleteProduct={onDelete}
      />
    </div>
  );
};


export default Home;