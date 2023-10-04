import { useRef } from "react";
import styles from "./FormData.module.css";
import Button1 from "../UI/Button1";

const FormData = (props) => {
  const searchRef = useRef();
  const locationRef = useRef();
  const checkRef = useRef();
  const locationIcon = "./desktop/icon-location.svg";
  const searchIcon = "./desktop/icon-search.svg";

  const submitHandler = (e) => {
    e.preventDefault();

    props.onClick({
      search: searchRef.current.value,
      location: locationRef.current.value,
      fulltime: checkRef.current.checked,
    });

    searchRef.current.value = "";
    locationRef.current.value = "";
    checkRef.current.checked = false;
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-control"]}>
        <label htmlFor="search"></label>
        <input type="text" id="search" ref={searchRef}></input>
        <img src={require(`${searchIcon}`)} alt="" />
      </div>
      <div className={styles["input-control"]}>
        <label htmlFor="location"></label>
        <input type="text" id="location" ref={locationRef}></input>
        <img src={require(`${locationIcon}`)} alt="" />
      </div>
      <div className={styles["input-control"]}>
        <input type="checkbox" id="full" ref={checkRef}></input>
        <label htmlFor="full">Full Time</label>
        <img src={require(`../../assets/desktop/icon-search.svg`)} alt="" />
      </div>
      <Button1 type="submit" className={styles.buttonsubmit}>
        Search
      </Button1>
    </form>
  );
};

export default FormData;
