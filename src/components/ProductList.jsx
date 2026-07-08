import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList ({products, onAddToCart, onDeleteProduct}){
    return(
         <div className="container">
            <div className="product-list">
            {products.map((item)=>(
                <ProductCard
                key={item.id}
                product={item}
                onAddToCart={onAddToCart}
                onDeleteProduct={onDeleteProduct}/>
            ))}
              </div>
        </div>
      )
}

export default ProductList;