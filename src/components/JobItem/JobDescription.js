import styles from "./JobDescription.module.css";

import Button1 from "../UI/Button1";

const JobDescription = (props) => {
  console.log(props.data.id);
  return (
    <div className={styles.jobDescriptionContainer}>
      <div className={styles["job-item-text"]}>
        <div className={styles["job-item-text-1"]}>
          <p>{props.postedAt}</p>
          <p>{props.data.contract}</p>
        </div>
        <h2>{props.data.position}</h2>
        <p className={styles.location}>{props.data.location}</p>
      </div>
      <Button1>Apply Now</Button1>
    </div>
  );
};

export default JobDescription;
