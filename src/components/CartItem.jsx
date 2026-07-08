import { FaTrash } from "react-icons/fa6";
import "./CartItem.css";

function CartItem ({item, onRemove}){

    return(
        <li className="cart-item">
            <div className="cart-item__info">
                <p className="cart-item__name">{item.nom}</p>
                <p className="cart-item__price">{item.prix} MAD</p>
            </div>
            <button className="cart-item__button" onClick={()=>onRemove(item.id)}><FaTrash />Supprimer</button>
        </li>
    )
}

export default CartItem;