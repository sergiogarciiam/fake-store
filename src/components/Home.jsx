import { useIndividualProduct } from "../utils/useProducts";

function Home() {
  const [product1, error1] = useIndividualProduct();
  const [product2, error2] = useIndividualProduct();
  const [product3, error3] = useIndividualProduct();

  return (
    <div className="home">
      <h1>Our Top Products</h1>
    </div>
  );
}

export default Home;
