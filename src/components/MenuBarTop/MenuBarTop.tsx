import { MenuBarElement } from "../MenuBarElement/MenuBarElement";

export const MenuBarTop = () => {
  return (
    <div className="menu--top">
      <MenuBarElement path="/home" iconSrc="/icons/home.icon.svg" text="Home" />
      <MenuBarElement path="/map" iconSrc="/icons/map.icon.svg" text="Map" />
      <MenuBarElement path="/list" iconSrc="/icons/list.icon.svg" text="List" />
      <MenuBarElement
        path="/orders"
        iconSrc="/icons/shoppingCart.icon.svg"
        text="My Orders"
      />
    </div>
  );
};
