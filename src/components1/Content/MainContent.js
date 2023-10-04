import { useState, useEffect } from "react";

import FormData from "./FormData";
import FormDataSmall from "./FormDataSmall";
import JobList from "./JobList";

const MainContent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const content =
    width > breakpoint ? (
      <FormData onClick={props.onSubmit} />
    ) : (
      <FormDataSmall onClick={props.onSubmit} />
    );
  return (
    <>
      {content}
      <JobList onTitleClick={props.onTitleClick} data={props.data} />
    </>
  );
};

export default MainContent;
