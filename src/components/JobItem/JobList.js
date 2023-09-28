import data from "../../data.json";

import blogr from "../../assets/logos/blogr.svg";
import coffeeroasters from "../../assets/logos/coffeeroasters.svg";
import creative from "../../assets/logos/creative.svg";
import crowdfund from "../../assets/logos/crowdfund.svg";
import maker from "../../assets/logos/maker.svg";
import mastercraft from "../../assets/logos/mastercraft.svg";
import officelite from "../../assets/logos/officelite.svg";
import pod from "../../assets/logos/pod.svg";
import pomodoro from "../../assets/logos/pomodoro.svg";
import scoot from "../../assets/logos/scoot.svg";
import typemaster from "../../assets/logos/typemaster.svg";
import vector from "../../assets/logos/vector.svg";

import styles from "./JobList.module.css";

import JobItem from "./JobItem";

const JobList = () => {
  const jobContent = data.map((item) => <JobItem data={item} />);
  return <div className={styles.joblist}>{jobContent}</div>;
};

export default JobList;
