function Products() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));

  return <h1>Products</h1>;
}

export default Products;
