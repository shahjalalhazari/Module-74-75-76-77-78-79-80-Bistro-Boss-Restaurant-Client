// This is component is for user authentication with Social Media app. Such as, facebook, google, github

import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const SMAuthentication = () => {
  return (
    <>
      <p className="divider-text">Or sign in with</p>
      <div className="social-media-icons">
        <button className="social-media">
          <FaFacebookF />
        </button>
        <button className="social-media">
          <FaGoogle />
        </button>
        <button className="social-media">
          <FaGithub />
        </button>
      </div>
    </>
  );
};

export default SMAuthentication;
