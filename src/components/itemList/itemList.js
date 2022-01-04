import "./itemList.css";
import { Link } from "react-router-dom";

export const ItemList = (props) => {
  console.log(props);
  return (
    <div className="col-12 col-md-6 col-xl-4 mb-4 itemList">
      <img src={props.image} alt="Image" />
      <h2>{props.title}</h2>
      <p>
        <span>$</span>
        {props.price}
      </p>
      <Link to={`/item/${props.id}`}>
        <button className="btn btn-success">Ver Producto</button>
      </Link>
    </div>
  );
};
