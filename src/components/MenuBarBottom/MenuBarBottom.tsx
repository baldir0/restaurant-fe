import { MenuBarElement } from "../MenuBarElement/MenuBarElement";

import "./MenuBarBottom.css";

export const MenuBarBottom = () => {
  return (
    <div className="menu__bottom">
      <MenuBarElement path="/addRestaurant/form" text="Add Restaurant" />
    </div>
  );
};
