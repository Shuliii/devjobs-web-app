import styles from "./JobItem.module.css";
import blogr from "../../assets/logos/blogr.svg";

const JobItem = (props) => {
  console.log(props.data);
  return (
    <div className={styles["job-item"]}>
      <img src="../../assets/logos/blogr.svg" />
      <div className={styles["job-item-text"]}>
        <div className={styles["job-item-text-1"]}>
          <p>{props.data.postedAt}</p>
          <p>{props.data.contract}</p>
        </div>
        <h2>{props.data.position}</h2>
        <p>{props.data.company}</p>
      </div>
      <p>{props.data.location}</p>
    </div>
  );
};

export default JobItem;
