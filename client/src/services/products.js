export const getProducts = async () => {
  let res = await fetch("/api/products");
  let products = await res.json();
  return products;
};

export const addToProducts = async (product) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(product),
  };
  let res = await fetch("/api/products", options);
  let body = await res.json();
  return body;
};

export const removeFromProducts = async (id) => {
  await fetch(`/api/products/${id}`, { method: "DELETE" });
};

export const editProduct = async (id, product) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const options = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(product),
  };
  let res = await fetch(`/api/products/${id}`, options);
  return res.json();
};
