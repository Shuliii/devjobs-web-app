import data from "../../data.json";

import styles from "./JobList.module.css";

import JobItem from "./JobItem";

const JobList = () => {
  const jobContent = data.map((item) => (
    <JobItem key={item.id} data={item} imgLogo={item.logo} />
  ));
  return <div className={styles.joblist}>{jobContent}</div>;
};

export default JobList;
