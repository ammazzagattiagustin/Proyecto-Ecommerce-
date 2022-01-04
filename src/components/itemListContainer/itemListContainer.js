import "./itemListContainer.css";
import { ItemList } from "../itemList/itemList";
import { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/index";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          setIsEmpty(true);
        }
        setItems(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console.error("Firestore error:", error));
  }, []);

  return isEmpty ? (
    <p>Esta página actualmente no tiene productos</p>
  ) : (
    items.map((item) => (
      <ItemList
        price={item.price}
        id={item.id}
        title={item.title}
        image={item.image}
      />
    ))
  );
};
