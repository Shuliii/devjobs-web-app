import styles from "./AltContentHeader.module.css";

import Button2 from "../UI/Button2";

const AltContentHeader = (props) => {
  return (
    <div className={styles.altContentHeader}>
      <div
        className={styles.imageContainer}
        style={{ background: `${props.logoBackground}` }}
      >
        <img src={require(`${props.logo}`)} alt={props.company} />
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <h1>{props.company}</h1>
          <p>{props.website}</p>
        </div>
        <Button2>Company Site</Button2>
      </div>
    </div>
  );
};

export default AltContentHeader;
