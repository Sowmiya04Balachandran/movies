import "./App.css";
import CartItem from "./components/Cart/CartItem";
import React, { useMemo, useState, useContext, Suspense } from "react";
//import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Contact from "./ContactUs/Contact";
import Products from "./components/Layout/Product";
import Login from "./components/Login/Login";
import MyContext from "./store/MyContext";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const { isLoggedIn } = useContext(MyContext);

  const productsArr = useMemo(
    () => [
      {
        id: 1,
        rate: 4.5,
        company: "Smartees",
        title: "Men Full Sleeve Printed Hooded",
        price: 599,
        imageUrl:
          "https://tse3.mm.bing.net/th?id=OIP.XRpWu0bExVHTRVyiriQf4AHaHa&pid=Api&P=0&h=180",
      },

      {
        id: 2,
        rate: 4.2,
        company: "Fastoche",
        title: "Men Full Sleeve Printed Hooded",
        price: 749,
        imageUrl:
          "https://tse3.mm.bing.net/th?id=OIP.M550p2-WXuV90ATm5D_X0AHaHa&pid=Api&P=0&h=180",
      },

      {
        id: 3,
        rate: 3.8,
        company: "Alan Jones",
        title: "Men Full Sleeve Solid Hooded",
        price: 500,
        imageUrl:
          "https://tse2.mm.bing.net/th?id=OIP.lDXeKtBI-2Jf0j7I5ODcewHaHa&pid=Api&P=0&h=180",
      },

      {
        id: 4,
        rate: 4.6,
        company: "Kay Dee",
        title: "Men Colorblock Hooded",
        price: 349,
        imageUrl:
          "https://tse2.mm.bing.net/th?id=OIP.3gFIIKAYDNf6ExHeNoLKuAHaHa&pid=Api&P=0&h=180",
      },
    ],
    []
  );

  const cartButtonHandler = (show) => {
    setShowCart(show);
  };

  const Home = React.lazy(() => import("./components/Home/Home"));

  return (
    <Router>
      <Header />
      <div>
        <Suspense fallback={<div className="centered">Loading....</div>}>
        
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            {isLoggedIn && (
              <Route exact path="/product">
                <Products products={productsArr} onCart={cartButtonHandler} />
                {showCart && <CartItem onCancel={cartButtonHandler} />}
              </Route>
            )}
            {!isLoggedIn && (
              <Route path="/product">
                <Redirect to="/login" />
              </Route>
            )}

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/*">
              <Login />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default React.memo(App);
