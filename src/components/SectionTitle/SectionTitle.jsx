/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading, color }) => {
  return (
    <div className="text-center">
      <h3 className="sub-heading">---{subHeading}---</h3>
      <h1 className={`heading text-${color}`}>{heading}</h1>
    </div>
  );
};

export default SectionTitle;
