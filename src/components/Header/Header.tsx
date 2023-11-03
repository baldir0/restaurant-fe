import { Link } from "react-router-dom";

import "./Header.css"

export const Header = () => {
  return (
    <header>
      <p className="title">Home Page</p>
      <Link to="/home" className="logo">
        <strong>Mega</strong>Orders
      </Link>
    </header>
  );
};
