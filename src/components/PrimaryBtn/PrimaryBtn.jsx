import { Link } from "react-router-dom";

const PrimaryBtn = ({ text, link }) => {
  return (
    <div className="text-center my-12">
      <Link to={link}>
        <button className="primary-btn">{text}</button>
      </Link>
    </div>
  );
};

export default PrimaryBtn;
