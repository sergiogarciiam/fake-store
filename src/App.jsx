import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useLocalStorage } from "./utils/useLocalStorage";

function App() {
  const { cart, addProduct, deleteProduct } = useLocalStorage();

  return (
    <div className="page">
      <Header cart={cart}></Header>
      <Outlet context={[cart, addProduct, deleteProduct]}></Outlet>
    </div>
  );
}

export default App;
