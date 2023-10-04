import { useRef } from "react";
import ReactDOM from "react-dom";

import Button1 from "../UI/Button1";

import styles from "./Modal.module.css";

import locationIcon from "../../assets/desktop/icon-location.svg";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const Overlay = (props) => {
  const locationRef = useRef();
  const checkRef = useRef();

  const clickHandler = () => {
    const data = {
      location: locationRef.current.value,
      fulltime: checkRef.current.checked,
    };
    props.onClick(data);
    locationRef.current.value = "";
    checkRef.current.checked = false;
  };

  return (
    <div className={styles.overlay}>
      <div className={styles["input-control"]}>
        <label htmlFor="location"></label>
        <input
          type="text"
          id="location"
          placeholder="Filter by location..."
          ref={locationRef}
        ></input>
        <img src={locationIcon} alt="" />
      </div>
      <div className={styles["input-control"]}>
        <input type="checkbox" id="full" ref={checkRef}></input>
        <label htmlFor="full">Full Time Only</label>
      </div>
      <div className={styles.buttonContainer}>
        <Button1 className={styles.buttonsearch} onClick={clickHandler}>
          Search
        </Button1>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop")
      )}

      {ReactDOM.createPortal(
        <Overlay onClick={props.onSearch} />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
