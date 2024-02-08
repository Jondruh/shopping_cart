export const getCart = async () => {
  try {
    let res = await axios.get("/api/cart");
    return res.data;
  } catch (e) {
    console.error(e);
  }
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
  console.log(res);
  let body = await res.json();
  return body;
};
