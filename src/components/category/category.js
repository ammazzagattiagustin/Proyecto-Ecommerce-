import "./category.css";
import { Link } from "react-router-dom";

export const Category = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Categorías de Productos</h1>
      <div className="container category mt-5">
        <div className="category-border">
          <h2>Remeras</h2>
          <p>Ver catálogo de remeras</p>
          <Link to="/category/1">
            <button className="btn btn-dark mt-5">Ingrese aquí</button>
          </Link>
        </div>
        <div className="category-border">
          <h2>Calcetines</h2>
          <p>Ver catálogo de calcetines</p>
          <Link to="/category/2">
            <button className="btn btn-dark mt-5">Ingrese aquí</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
