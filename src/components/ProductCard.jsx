import { FaCartShopping } from "react-icons/fa6";
import "./ProductCard.css";

function ProductCard ({product, onAddToCart, onDeleteProduct}){
    return (
        <div className="product-card">
            <img className="product-card__image" src={product.image} alt={product.nom} />
            <h3 className="product-card__title">{product.nom}</h3>
            <p className="product-card__text">Prix: {product.prix} MAD</p>
            <p className="product-card__text">Catégorie: {product.categorie}</p>
            <div className="product-card__actions">
              <button className="product-card__button product-card__button--primary" onClick={()=> onAddToCart(product)}><FaCartShopping />Ajouter au panier</button>
              <button className="product-card__button product-card__button--danger" onClick={() => onDeleteProduct(product.id)}>Supprimer</button>
            </div>
        </div>
    )
}

export default ProductCard;