//import "./Products.css";
import ProductItem from "./ProductItem";
import React from "react";
import AboutHeader from "../About/AboutHeader";
import AboutFooter from "../About/AboutFooter";
import Cart from "../Cart/Cart";

//const img = "assests/hoodie";

const imgurl = [
  "https://tse3.mm.bing.net/th?id=OIP.XRpWu0bExVHTRVyiriQf4AHaHa&pid=Api&P=0&h=180",
  "https://tse3.mm.bing.net/th?id=OIP.M550p2-WXuV90ATm5D_X0AHaHa&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.lDXeKtBI-2Jf0j7I5ODcewHaHa&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.3gFIIKAYDNf6ExHeNoLKuAHaHa&pid=Api&P=0&h=180",
];

const Product = (props) => {
  return (
    <div className="products">
      <AboutHeader />
      <Cart onCart={props.onCart} />
      <h1>Men Hoodies</h1>
      <ul className="product-list">
        {props.products.map((product, index) => (
          <ProductItem
            rate={product.rate}
            key={product.id}
            id={product.id}
            //img={`${img}${index + 1}`}
           // ind={index + 1}
           img={imgurl[index]} // Use direct image URL
            ind={index + 1}
            product={product}
          />
        ))}
      </ul>
      <AboutFooter />
    </div>
  );
};

export default React.memo(Product);
