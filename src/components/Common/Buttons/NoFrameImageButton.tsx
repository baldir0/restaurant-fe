import "./Buttons.css";

interface Props {
  src: string;
  className?: string;
  onClick?: () => void;
}

export const NoFrameImageButton = (props: Props) => {
  return (
    <button
      className={"button button--clear " + props.className}
      type="button"
      onClick={props.onClick}
    >
      <img src={props.src} alt="button" className="button__icon" />
    </button>
  );
};
