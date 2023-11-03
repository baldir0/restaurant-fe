import { Link, NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu--top">
        <NavLink to="/home">
          <img src="icons/home.icon.svg" alt="home icon" />
          Home
        </NavLink>
        <NavLink to="/map">
          <img src="icons/map.icon.svg" alt="home icon" />
          Map
        </NavLink>
        <NavLink to="/list">
          <img src="icons/list.icon.svg" alt="home icon" />
          List
        </NavLink>
        <NavLink to="/orders">
          <img src="icons/shoppingCart.icon.svg" alt="home icon" />
          My Orders
        </NavLink>
      </div>
      <div className="menu--bottom">
        <NavLink to="/form/addRestaurant">Add Restaurant</NavLink>
      </div>
    </div>
  );
};
