import "./cartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
  return (
    <a href="">
      <FontAwesomeIcon className="cart" icon={faShoppingCart} />
    </a>
  );
};
