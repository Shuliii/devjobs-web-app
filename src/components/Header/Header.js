import styles from "./Header.module.css";
// import headerImage from "../../assets/desktop/bg-pattern-header.svg";
import logo from "../../assets/desktop/logo.svg";
import sun from "../../assets/desktop/icon-sun.svg";
import moon from "../../assets/desktop/icon-moon.svg";
import FormData from "./FormData";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <img src={headerImage}></img> */}
      <img src={logo} alt="" />
      <div className={styles["switch-theme"]}>
        <img src={sun} alt="" />
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
        <img src={moon} alt="" />
      </div>
      <FormData className={styles.form} />
    </header>
  );
};

export default Header;
