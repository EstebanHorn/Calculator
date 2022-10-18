import "../stylesheets/Button.css";

function Button(props) {
  const operator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
        className={`button-container ${
            operator(props.children) ? "operator" : ""
            }`.trimEnd()}
        onClick={() => props.click(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
