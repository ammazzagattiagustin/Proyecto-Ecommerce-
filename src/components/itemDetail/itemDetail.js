import "./itemDetail.css";
import { ItemCount } from "../itemCount/itemCount";
import { useState, useContext } from "react";
import { CartContext } from "../cartContext/cartContext";

export const ItemDetail = (item) => {
  const [
    products,
    productsCount,
    addProduct,
    cleanCart,
    removeItem,
    getTotal,
  ] = useContext(CartContext);

  const [productQuantity, setProductQuantity] = useState(0);

  const onAdd = (count) => {
    setProductQuantity(count);
  };

  return (
    <div className="col-12 mt-5 itemDetail">
      <div>
        <img src={item.image} alt="Image" />
      </div>
      <div>
        <h2>{item.title}</h2>
        <p className="itemPrice">${item.price}</p>
        <p>Indumentaria de algodón con estampa.</p>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <button
          className="btn btn-success btn-sm mt-3"
          onClick={() => addProduct(item, productQuantity)}
        >
          {" "}
          Agregar al Carrito : {productQuantity}
        </button>
      </div>
    </div>
  );
};
