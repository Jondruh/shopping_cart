import EditProduct from "./EditProduct";
import { useState } from "react";

const Product = ({ product, onDeleteProduct, onEditProduct, onAddToCart }) => {
  let [showForm, setShowForm] = useState(false);

  const deleteProduct = () => {
    onDeleteProduct(product._id);
  };

  const addToCart = () => {
    onAddToCart(product._id);
  };

  return (
    <li className="product">
      <h3>{product.title}</h3>
      <p className="price">{product.price}</p>
      <p className="quantity">{product.quantity} left in stock </p>
      <div className="actions product-actions">
        <button onClick={addToCart} className="add-to-cart">
          Add to Cart
        </button>
        <button onClick={() => setShowForm(true)} className="edit">
          Edit
        </button>
      </div>
      <button onClick={deleteProduct} className="delete-button">
        <span>X</span>
      </button>
      {showForm ? (
        <EditProduct
          product={product}
          onEditProduct={onEditProduct}
          setShowForm={setShowForm}
        />
      ) : null}
    </li>
  );
};

export default Product;
