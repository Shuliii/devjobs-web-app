import styles from "./FormData.module.css";
import Button1 from "../UI/Button1";

const FormData = (props) => {
  const locationIcon = "./desktop/icon-location.svg";
  const searchIcon = "./desktop/icon-search.svg";
  return (
    <form className={`${props.className} ${styles.form}`}>
      <div className={styles["input-control"]}>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          palceholder="Filter by location..."
        ></input>
        <img src={require(`${searchIcon}`)} alt="" />
      </div>
      <div className={styles["input-control"]}>
        <label htmlFor="location"></label>
        <input type="text" id="location"></input>
        <img src={require(`${locationIcon}`)} alt="" />
      </div>
      <div className={styles["input-control"]}>
        <input type="checkbox" id="full"></input>
        <label htmlFor="full">Full Time Only</label>
        <img src={require(`../../assets/desktop/icon-search.svg`)} alt="" />
      </div>
      <Button1 type="submit" className={styles.buttonsubmit}>
        Search
      </Button1>
    </form>
  );
};

export default FormData;
