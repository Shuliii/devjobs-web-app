// import useWindowDimensions from "../hooks/use-windows";

import { useState, useEffect } from "react";

import styles from "./Footer.module.css";

import Button1 from "../UI/Button1";

const Footer = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 480;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width > breakpoint ? (
    <footer className={styles.footer}>
      <div className={styles.footercontent}>
        <div>
          <h3 className={styles.footerh3}>{props.position}</h3>
          <p>So Digital Inc.</p>
        </div>
        <Button1 className={styles.buttonfull}>Apply Now</Button1>
      </div>
    </footer>
  ) : (
    <footer className={styles.footer}>
      <div className={styles.footercontent}>
        <Button1 className={styles.button}>Apply Now</Button1>
      </div>
    </footer>
  );
};

export default Footer;
