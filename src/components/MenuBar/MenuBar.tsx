import { MenuBarTop } from "../MenuBarTop/MenuBarTop";
import { MenuBarBottom } from "../MenuBarBottom/MenuBarBottom";

import "./MenuBar.css";

export const MenuBar = () => {
  return (
    <div className="menu">
      <MenuBarTop />
      <MenuBarBottom />
    </div>
  );
};
