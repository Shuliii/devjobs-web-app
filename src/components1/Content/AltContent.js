import AltContentHeader from "./AltContentHeader";
import JobDescription from "./JobDescription";
import Footer from "./Footer";

const AltContent = (props) => {
  const { logo, company, website, logoBackground } = props.data;
  return (
    <>
      <AltContentHeader
        logo={logo}
        company={company}
        website={website}
        logoBackground={logoBackground}
      />
      <JobDescription data={props.data} />
      <Footer position={props.data.position} />
    </>
  );
};

export default AltContent;
