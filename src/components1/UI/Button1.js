import styles from "./Button1.module.css";

const Button1 = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${props.className} ${styles.button} `}
    >
      {props.children}
    </button>
  );
};

export default Button1;
