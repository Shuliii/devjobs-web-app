import { useRef, useState, useReducer } from "react";

import Button1 from "../UI/Button1";
import Modal from "../UI/Modal";

import styles from "./FormDataSmall.module.css";

import filter from "./mobile/icon-filter.svg";
import searchwhite from "./desktop/icon-search-white.svg";

const stateDefault = {
  search: "",
  location: "",
  fulltime: "",
};

const dataReducer = (state, action) => {
  if (action.type === "add from search") {
    return {
      search: state.search,
      location: action.val.location,
      fulltime: action.val.fulltime,
    };
  }

  if (action.type === "add from form") {
    return {
      search: action.val,
      location: state.location,
      fulltime: state.fulltime,
    };
  }

  if (action.type === "reset") {
    return stateDefault;
  }
};

const FormDataSmall = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [data, dispatchData] = useReducer(dataReducer, stateDefault);

  const searchRef = useRef();

  const imageClickHandler = () => {
    setIsExpand(true);
  };

  const modalHandler = () => {
    setIsExpand(false);
  };

  const changeInputHandler = (e) => {
    // setData((prev) => {
    //   return { ...prev, search: e.target.value };
    // });
    dispatchData({ type: "add from form", val: e.target.value });
  };

  const searchHandler = (inputData) => {
    // setIsExpand(false);
    // setData((prev) => {
    //   return { ...data, ...prev };
    // });
    dispatchData({ type: "add from search", val: inputData });
    // props.onClick(data);
    // dispatchData({ type: "reset" });
    setIsExpand(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onClick(data);
    dispatchData({ type: "reset" });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-control"]}>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          ref={searchRef}
          value={data.search}
          onChange={changeInputHandler}
        />
        <img src={filter} onClick={imageClickHandler} alt="" />
      </div>
      <Button1 type="submit" className={styles.search}>
        <img src={searchwhite} alt="" />
      </Button1>

      {isExpand && <Modal onClose={modalHandler} onSearch={searchHandler} />}
      {/* <div className={styles["input-control"]}>
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
      </div>
      <Button1 type="submit" className={styles.buttonsubmit}>
        Search
      </Button1> */}
    </form>
  );
};

export default FormDataSmall;
