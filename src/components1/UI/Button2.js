import styles from "./Button2.module.css";

const Button2 = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${styles.button} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button2;
