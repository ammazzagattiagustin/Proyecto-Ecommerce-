import "../src/App.css";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/itemDetailContainer/itemDetailContainer";
import { Category } from "./components/category/category";
import CartContextProvider from "./components/cartContext/cartContext";
import Cart from "./components/cartContext/cart";
import { CategoryId } from "./components/category/categoryId";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
            <Footer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/categories">
            <Category />
          </Route>
          <Route path="/category/:categoryId">
            <CategoryId />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
