import "./Header.css";
import { IoCartSharp } from "react-icons/io5";
import {Link} from "react-router-dom"


function Header({ cartCount, onOpenCart }) {
  return (
    <header className="header">
      <div className="logo">MiniBoutique</div>


      <nav className="nav-links">
        <Link to = "/">Home</Link>
        <Link to = "/add">Ajouter Produit</Link>

      </nav>

        <div className="card" onClick={onOpenCart}>
             <IoCartSharp size={26}/>
             <span className="badge-cart">{cartCount}</span>
        </div>
      
    </header>
  );
}
export default Header;