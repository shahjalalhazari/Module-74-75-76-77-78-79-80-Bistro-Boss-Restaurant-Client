// This is component is for user authentication with Social Media app. Such as, facebook, google, github

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

// Google auth providers
const googleProvider = new GoogleAuthProvider();

const SMAuthentication = () => {
  // Getting firebase auth Auth Context
  const { auth, setLoading } = useAuth();


  // Redirect after signin
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Sign In with Google
  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const loggedUser = result.user;
        const savedUser = {
          name: result.user.displayName,
          email: result.user.email,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <p className="divider-text">Or sign in with</p>
      <div className="social-media-icons">
        <button className="social-media">
          <FaFacebookF />
        </button>
        <button onClick={handleGoogleSignIn} className="social-media">
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
