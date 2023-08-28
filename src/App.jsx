import { Link, Outlet, useLocation } from "react-router-dom";
import { useActiveLink } from "./utils/useActiveLink";
import Header from "./components/Header";

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
