import { useState } from "react";

import data from "../../data.json";

import styles from "./JobList.module.css";

import JobItem from "./JobItem";
import Button1 from "../UI/Button1";

const JobList = (props) => {
  const [isLoadMore, setIsLoadMore] = useState(false);

  let jobContent = [];

  if (!isLoadMore) {
    const numberWantToShow = 12;
    const newData = [];
    for (let i = 0; i < numberWantToShow; i++) {
      newData.push(data[i]);
    }
    jobContent = newData.map((item) => (
      <JobItem
        key={item.id}
        data={item}
        imgLogo={item.logo}
        onTitleClick={props.onTitleClick}
      />
    ));
  } else {
    jobContent = data.map((item) => (
      <JobItem
        key={item.id}
        data={item}
        imgLogo={item.logo}
        onTitleClick={props.onTitleClick}
      />
    ));
  }

  const moreClickHandler = () => {
    setIsLoadMore(true);
  };

  // const lessClickHandler = () => {
  //   setIsLoadMore(false);
  // };

  return (
    <>
      <div className={styles.joblist}>{jobContent}</div>
      <div className={styles.buttonContainer}>
        {!isLoadMore && <Button1 onClick={moreClickHandler}>Load More</Button1>}
        {/* {isLoadMore && <Button1 onClick={lessClickHandler}>Load Less</Button1>} */}
      </div>
    </>
  );
};

export default JobList;
