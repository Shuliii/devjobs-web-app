import styles from "./JobItem.module.css";

const JobItem = (props) => {
  const jobItemTitleClick = () => {
    props.onTitleClick(props.data);
  };
  return (
    <div className={styles["job-item"]}>
      <div
        className={styles.imageContainer}
        style={{ background: `${props.data.logoBackground}` }}
      >
        <img src={require(`${props.data.logo}`)} alt={props.data.company} />
      </div>
      <div className={styles["job-item-text"]}>
        <div className={styles["job-item-text-1"]}>
          <p>{props.data.postedAt}</p>
          <p>{props.data.contract}</p>
        </div>
        <h2 onClick={jobItemTitleClick}>{props.data.position}</h2>
        <p>{props.data.company}</p>
      </div>
      <p className={styles.location}>{props.data.location}</p>
    </div>
  );
};

export default JobItem;
