import { MenuBarTop } from "../MenuBarTop/MenuBarTop";
import { MenuBarBottom } from "../MenuBarBottom/MenuBarBottom";

import "./MenuBar.css";
import { NoFrameImageButton } from "../Common/Buttons/NoFrameImageButton";
import { useState } from "react";

export const MenuBar = () => {
  const [visiblity, setVisibility] = useState<boolean>(false);

  const handleMenuSwitch = () => {
    setVisibility(!visiblity);
  };

  return (
    <div className={"menu " + (visiblity ? "" : "menu--hidden")}>
      <MenuBarTop />
      <MenuBarBottom />
      <NoFrameImageButton
        src="/icons/expand-right-double.svg"
        className={
          (visiblity ? "button--show_menu" : "button--hide_menu") +
          " button--menu_switch"
        }
        onClick={handleMenuSwitch}
      />
    </div>
  );
};
