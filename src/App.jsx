import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Cart from './components/Cart'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
import NotFound from "./pages/NotFound"
import productsData from "./data/products.json"
import { useState } from "react"


function App(){

  
  
  
  const [products, setProducts] = useState(productsData)
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  
    const displayProducts = selectedCategory === "Tous"
    ? products
    : products.filter((p) => p.categorie === selectedCategory)
  
  
  
    const deleteProduct = (id) => {
      setProducts(products.filter(p=> p.id !== id));
    }
  
  
    const addToCart = (product) => {
      setCart ([...cart,product]);
    }
  
  
    const removeFromCart = (id) => {
      setCart(cart.filter(item => item.id !== id))
    };

return(

<BrowserRouter>
<Header cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)}/>
<Routes>
  <Route path= "/" element ={<Home products={displayProducts} onDelete={deleteProduct} onAddToCart={addToCart}/>}/>
  <Route path= "/add" element ={<AddProduct setProducts={setProducts}/>}/>
  <Route path= "*" element ={<NotFound/>}/>
</Routes>
{isCartOpen && (
  <Cart 
    cart={cart} 
    onRemoveFromCart={removeFromCart} 
    onClose={() => setIsCartOpen(false)} 
  />
)}
</BrowserRouter>
)
}
export default App;