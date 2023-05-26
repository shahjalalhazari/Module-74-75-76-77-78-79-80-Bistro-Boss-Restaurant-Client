/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <h3 className="sub-heading">---{subHeading}---</h3>
      <h1 className="heading">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
