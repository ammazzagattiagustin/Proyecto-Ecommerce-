import { useParams } from "react-router";
import { ItemDetail } from "../itemDetail/itemDetail";
import { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/index";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const prod = itemCollection.doc(id);
    prod.get().then((querySnapshot) => {
      const data = querySnapshot.data();
      setItem(data);
    });
  }, []);

  return (
    <>
      {item ? (
        <ItemDetail
          price={item.price}
          id={id}
          title={item.title}
          image={item.image}
        />
      ) : (
        <p>Item no encontrado...</p>
      )}
    </>
  );
};
