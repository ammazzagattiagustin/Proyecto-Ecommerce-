import "./cart.css";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../components/cartContext/cartContext";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase/index";

function Cart() {
  const [
    products,
    productsCount,
    addProduct,
    cleanCart,
    removeItem,
    getTotal,
  ] = useContext(CartContext);

  useEffect(() => {
    console.log(products);
  });

  const [OrderId, setOrderId] = useState(0);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const handleClick = () => {
    const db = getFirestore();
    const order = db.collection("orders");
    const newOrder = {
      buyer: {
        name,
        email,
        phone,
      },
      products,
      total: products.reduce((total, { subtotal }) => total + subtotal, 0),
    };
    order
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
      })
      .catch((err) => {
        console.log("error" + err);
      });
  };

  useEffect(() => {
    if (OrderId) {
      alert(OrderId);
    }
  }, [OrderId]);

  return (
    <div className="container">
      <h2 className="mt-3">Detalle de tu Carrito</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <div className="col-12 col-md-6 col-xl-4 mb-4 itemList">
            <hr></hr>
            <p>Item:{product.title}</p>
            <p>Cantidad:{product.quantity}</p>
            <p>Precio:${product.price}</p>
            <div>
              <img height={100} src={product.image} alt="Image" />
            </div>
            <button
              onClick={() => removeItem(products.id)}
              class="btn btn-danger btn-sm"
            >
              Eliminar Producto
            </button>
            <hr></hr>
          </div>
        ))
      ) : (
        <div>
          <p>Carrito vacío - Comience a Comprar!</p>
          <Link to="/">
            <button className="btn btn-dark btn-sm">
              Volver a página principal
            </button>
          </Link>
        </div>
      )}
      <div>
        <button
          className="btn btn-danger btn-sm mt-3 mb-3"
          onClick={() => cleanCart()}
        >
          Vaciar Carrito
        </button>
      </div>
      <h4 className="mt-3">Importe Total: $ {getTotal()}</h4>
      <div className="mt-5">
        <div>
          <label>Nombre:</label>
          <input
            className="ml-2"
            type="name"
            id="name"
            name="name"
            placeholder="Tu Nombre"
            onBlur={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            className="ml-2"
            type="email"
            id="email"
            name="email"
            placeholder="Tu Correo Electrónico"
            onBlur={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Teléfono Celular:</label>
          <input
            className="ml-2"
            type="phone"
            id="phone"
            name="phone"
            placeholder="Tu Teléfono"
            onBlur={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button onClick={handleClick} className="btn btn-dark btn-sm mb-5 mt-3">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default Cart;
