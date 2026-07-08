import "./CategoryFilter.css";

function CategoryFilter ({products, setCategory}){
    const categories = ["Tous", ...new Set(products.map((p)=>p.categorie))];

    return(
        <div className="category">
        <select onChange={(e) => setCategory(e.target.value)} className="category-select">
      {categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
         </select>
        </div>
    )
}
export default CategoryFilter;