import { Link, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Header/Menu";

function App() {
  return (
    <>
      <header>
        <p className="title">Home Page</p>
        <Link to="/home" className="logo">
          <strong>Mega</strong>Orders
        </Link>
      </header>
      <div className="container">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/home" />
            <Route path="/map" />
            <Route path="/list" />
            <Route path="/orders" />
            <Route path="*" />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
