import styles from "./JobDescription.module.css";

import Button1 from "../UI/Button1";

const JobDescription = (props) => {
  const section4helper = props.data.requirements.items.map((item) => (
    <li key={Math.random()}>{item}</li>
  ));

  const section6helper = props.data.role.items.map((item) => <li>{item}</li>);
  return (
    <div className={styles.descriptionContainer}>
      <section className={styles.section1}>
        <div className={styles["job-description-left"]}>
          <div className={styles.greyout}>
            <p>{props.data.postedAt}</p>
            <p>{props.data.contract}</p>
          </div>
          <h2>{props.data.position}</h2>
          <p className={styles.location}>{props.data.location}</p>
        </div>
        <Button1 className={styles.button}>Apply Now</Button1>
      </section>
      <section className={styles.section2}>{props.data.description}</section>
      <section className={styles.section3}>
        <h3>Requirements</h3>
        {props.data.requirements.content}
      </section>
      <section className={styles.section4}>
        <ul>{section4helper}</ul>
      </section>
      <section className={styles.section5}>
        <h3>What You Will Do</h3>
        {props.data.role.content}
      </section>
      <section className={styles.section6}>
        <ol>{section6helper}</ol>
      </section>
    </div>
  );
};

export default JobDescription;
