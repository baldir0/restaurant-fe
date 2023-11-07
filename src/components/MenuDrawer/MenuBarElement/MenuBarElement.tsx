import { NavLink } from "react-router-dom";

import './MenuBarElement.css';

interface Props {
  path: string;
  text: string;
  iconSrc?: string;
}

export const MenuBarElement = (props: Props) => {
  return (
    <NavLink to={props.path} className={"menu__item"}>
      {props.iconSrc && <img src={props.iconSrc} alt="Menu Icon" className="menu__icon"/>}
      {props.text}
    </NavLink>
  );
};
