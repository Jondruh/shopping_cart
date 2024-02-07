import Product from "./Product";

const ProductListing = ({data}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {data.map((product) => {
         return (
          <Product key={product.id} product={product} />
        )})}
      </ul>
    </div>
  )
};

export default ProductListing;