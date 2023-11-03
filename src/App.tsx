import { Link } from "react-router-dom";
import { Menu } from "./components/Header/Menu";
import { ContentBox } from "./components/ContentBox/ContentBox";

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
        <ContentBox />
      </div>
    </>
  );
}

export default App;
