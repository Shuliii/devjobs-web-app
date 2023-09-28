import styles from "./JobItem.module.css";

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

const JobItem = (props) => {
  const imgLogo = props.data.logo;
  console.log(imgLogo);
  return (
    <div className={styles["job-item"]}>
      <img src={props.imgLogo} alt={props.data.company} />
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
