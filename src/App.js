import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import AddNewProducts from "./components/pages/AddNewProducts";
import { Provider } from "react-redux";
import store from "./Redux/store";
import GetAllProduct from "./components/pages/GetAllProduct";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/products">
              <AddNewProducts />
            </Route>
            <Route path="/allProduct">
              <GetAllProduct />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
