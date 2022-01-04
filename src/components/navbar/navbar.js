import "./navbar.css";
import { CartWidget } from "../../components/cartWidget/cartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../components/cartContext/cartContext";

export const Navbar = () => {
  const [
    products,
    productsCount,
    addProduct,
    delProduct,
    getGrandTotal,
    getTotal,
  ] = useContext(CartContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            CLOTHES
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Productos
                  </a>
                </li>
              </Link>
              <Link to="/categories">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Categorías
                  </a>
                </li>
              </Link>
            </ul>
            <form className="d-flex">
              <Link to="/cart">
                <a className="text-white">
                  <CartWidget />
                  {productsCount() > 0 ? productsCount() : <p></p>}
                </a>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
