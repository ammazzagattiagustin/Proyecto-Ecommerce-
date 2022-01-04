import { useState, useEffect } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < 0) {
      //controlamos que no sea menos que 0
      setCount(0);
    } else {
      if (count == 11) {
        // controlamos que no pase del "stock"
        setCount(10);
      }
      onAdd(count); // pasamos valor al padre
    }
  }, [count]); // efecto que se ejecuta solo cuando cambia count

  return (
    <div>
      <div>
        <button className="m-1" onClick={() => setCount(count - 1)}>
          -
        </button>
        {count}
        <button className="m-1" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <div></div>
    </div>
  );
};
