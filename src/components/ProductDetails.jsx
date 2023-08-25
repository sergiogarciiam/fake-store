function ProductDetails() {
  fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return <h1>Product Details</h1>;
}

export default ProductDetails;
