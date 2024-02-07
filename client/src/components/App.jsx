import things from "../mockData/data";
import { useState, useEffect } from "react";
import Header from "./Header";
import ProductListing from "./ProductListing";
import AddProduct from "./AddProduct";

const App = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    setData(things);
  }, []);

  const handleNewProduct = async (product, callback) => {
    const headers = {
      "Content-Type": "application/json",
    };
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(product),
    };

    try {
      let res = await fetch("/api/products", options);
      let body = await res.json();
      if (callback) {
        callback();
      }
      console.log(body);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing data={data} />
        <AddProduct onNewProduct={handleNewProduct} />
      </main>
    </div>
  );
};

export default App;
