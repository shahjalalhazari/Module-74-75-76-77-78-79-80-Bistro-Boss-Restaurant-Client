import { Helmet } from "react-helmet-async";
import loginImg from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// React captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import SMAuthentication from "../shared/SMAuthentication/SMAuthentication";
import { AuthContext } from "./../../providers/AuthProvider";

const Login = () => {
  const captchaRef = useRef(null);
  const [allowLogin, setAllowLogin] = useState(!false);

  const { signIn } = useContext(AuthContext);

  // Redirect user after login
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const loggedUser = result.user;
      navigate(from, { replace: true });
    });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setAllowLogin(!true);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Captcha Verified!!!",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      setAllowLogin(true);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Login | Bistro Boss Restaurant</title>
      </Helmet>

      <div
        className="p-8 md:py-20 md:px-40"
        style={{
          backgroundImage: `url("${bgImg}")`,
        }}
      >
        <div
          className="shadow-3xl"
          style={{
            backgroundImage: `url("${bgImg}")`,
          }}
        >
          <div className="card-container">
            <div className="login-img">
              <img src={loginImg} alt="" className="w-full md:-mt-20" />
            </div>
            <div className="login-form  md:mr-28">
              <h2 className="login-card-heading">Login</h2>
              {/* Login Form */}
              <form onSubmit={handleLogin}>
                {/* Email FIeld */}
                <div className="form-control">
                  <label htmlFor="email" className="label-text">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type here"
                    className="input-field"
                    required
                  />
                </div>
                {/* Password Field */}
                <div className="form-control mt-6">
                  <label htmlFor="password" className="label-text">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="input-field"
                    required
                  />
                </div>
                {/* Captcha Field */}
                <div className="form-control mt-9">
                  <LoadCanvasTemplate />
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="Type captcha text here"
                    className="input-field mt-3"
                    ref={captchaRef}
                  />
                  {/* <button className="btn btn-xs mt-2">Verify Captcha</button> */}
                </div>
                {/* Submit Button */}
                <input
                  disabled={allowLogin}
                  type="submit"
                  value="Sign In"
                  className="submit-btn"
                />
              </form>
              {/* Bottom Content */}
              <div className="text-center mt-8">
                {/* Redirect link to sign up page */}
                <p className="redirect-text">
                  New here?{" "}
                  <Link to="/signup" className="font-medium hover:underline">
                    Create a New Account
                  </Link>
                </p>
                {/* Social Media SignIn */}
                <SMAuthentication />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
