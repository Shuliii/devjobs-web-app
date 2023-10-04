import { useState } from "react";
import Header from "./components1/Header/Header";
import MainContent from "./components1/Content/MainContent";
import AltContent from "./components1/Content/AltContent";
import dataDefault from "./data.json";

function App() {
  const [isJobList, setIsJobList] = useState(true);
  const [data, setData] = useState([]);
  const [jobList, setJobList] = useState(dataDefault);

  const titleClickHandler = (data) => {
    setIsJobList(false);
    setData(data);
  };

  const headerClick = () => {
    setIsJobList(true);
    setJobList(dataDefault);
  };

  const onSubmit = (submitData) => {
    console.log(submitData);
    let newData = dataDefault.filter(
      (item) =>
        item.location
          .toLowerCase()
          .includes(submitData.location.toLowerCase()) &&
        item.position.toLowerCase().includes(submitData.search.toLowerCase())
    );
    if (submitData.fulltime === true) {
      newData = newData.filter((item) => item.contract === "Full Time");
    }
    setJobList(newData);
  };

  return (
    <>
      <Header onClick={headerClick} />
      <main>
        {isJobList ? (
          <MainContent
            onTitleClick={titleClickHandler}
            data={jobList}
            onSubmit={onSubmit}
          />
        ) : (
          <AltContent data={data} />
        )}
      </main>
    </>
  );
}

export default App;
