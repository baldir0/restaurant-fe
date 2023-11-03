import { NavLink } from "react-router-dom";

interface Props {
  path: string;
  text: string;
  iconSrc?: string;
}

export const MenuBarElement = (props: Props) => {
  return (
    <NavLink to={props.path}>
      {props.iconSrc && <img src={props.iconSrc} alt="Menu Icon" />}
      {props.text}
    </NavLink>
  );
};
