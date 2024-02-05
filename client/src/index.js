import React from "react";
import ReactDOM from "react-dom/client";
import data from "./mockData/data";

const App = () => {
  console.log(data);
  return React.createElement(
    "body",
    {},
    React.createElement("div", { id: "app" }, [Header(), Main()]),
  );
};

const Header = () => {
  return React.createElement("header", {}, [
    React.createElement("h1", {}, ["The Shop!"]),
    Cart(),
  ]);
};

const Cart = () => {
  return React.createElement("div", { className: "cart" }, [
    React.createElement("h2", {}, "Your Cart"),
    React.createElement("p", {}, "Your cart is empty"),
    React.createElement("p", {}, "Total: $0"),
    React.createElement(
      "button",
      { className: "checkout", disabled: true },
      "Checkout",
    ),
  ]);
};

const Main = () => {
  return React.createElement("main", {}, [ProductListing(), AddForm()]);
};

const ProductListing = () => {
  return React.createElement("div", { className: "product-list" }, [
    React.createElement("h2", {}, "Products"),
    React.createElement("ul", { className: "product-list" }, [
      Product({
        itemName: "Amazon Kindle E-Reader",
        price: "$79.99",
        quantity: "5",
      }),
      Product({
        itemName: "Apple 10.5-Inch iPad Pro",
        price: "$649.99",
        quantity: "2",
      }),
      Product({
        itemName: "Yamaha Portable Keyboard",
        price: "$155.99",
        quantity: "0",
      }),
    ]),
  ]);
};

const Product = ({ itemName, price, quantity }) => {
  return React.createElement("li", { className: "product" }, [
    React.createElement("div", { className: "product-details" }, [
      React.createElement("h3", {}, itemName),
      React.createElement("p", { className: "price" }, price),
      React.createElement(
        "p",
        { className: "quantity" },
        `${quantity} left in stock`,
      ),
      React.createElement("div", { className: "actions product-actions" }, [
        React.createElement(
          "button",
          { className: "add-to-cart" },
          "Add to Cart",
        ),
        React.createElement("button", { className: "edit" }, "Edit"),
      ]),
      React.createElement("button", { className: "delete-button" }, [
        React.createElement("span", {}, "X"),
      ]),
    ]),
  ]);
};

const AddForm = () => {
  return React.createElement("div", { className: "add-form" }, [
    React.createElement("p", {}, [
      React.createElement(
        "button",
        { className: "add-product-button" },
        "Add A Product",
      ),
    ]),
    React.createElement("form", {}, [
      React.createElement("div", { className: "input-group" }, [
        React.createElement("label", { for: "product-name" }, "Product Name:"),
        React.createElement("input", {
          type: "text",
          id: "product-name",
          name: "product-name",
          required: true,
        }),
      ]),
      React.createElement("div", { className: "input-group" }, [
        React.createElement("label", { for: "product-price" }, "Price:"),
        React.createElement("input", {
          type: "number",
          id: "product-price",
          name: "product-price",
          min: "0",
          step: "0.01",
          required: true,
        }),
      ]),
      React.createElement("div", { className: "input-group" }, [
        React.createElement("label", { for: "product-quantity" }, "Quantity:"),
        React.createElement("input", {
          type: "number",
          id: "product-quantity",
          name: "product-quantity",
          min: "0",
          required: true,
        }),
      ]),
      React.createElement("div", { className: "actions form-actions" }, [
        React.createElement("button", { type: "submit" }, "Add"),
        React.createElement("button", { type: "button" }, "Cancel"),
      ]),
    ]),
  ]);
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(React.createElement(App));
