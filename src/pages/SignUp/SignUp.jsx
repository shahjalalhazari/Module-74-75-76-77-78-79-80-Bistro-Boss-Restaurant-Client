import { Helmet } from "react-helmet-async";
import loginImg from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";
import SMAuthentication from "../shared/SMAuthentication/SMAuthentication";

const SignUp = () => {
  // const captchaRef = useRef(null);
  // const [allowLogin, setAllowLogin] = useState(true);

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const loginData = { email, password };
  //   console.log(loginData);
  // };

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  // const handleValidateCaptcha = () => {
  //   const user_captcha_value = captchaRef.current.value;
  //   if (validateCaptcha(user_captcha_value) == true) {
  //     setAllowLogin(false);
  //   } else {
  //     setAllowLogin(true);
  //   }
  // };
  return (
    <div>
      <Helmet>
        <title>Signup | Bistro Boss Restaurant</title>
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
            <div className="login-form md:ml-28">
              <h2 className="login-card-heading">Sign Up</h2>
              {/* Login Form */}
              {/* <form onSubmit={handleLogin}> */}
              <form>
                {/* Name FIeld */}
                <div className="form-control">
                  <label htmlFor="name" className="label-text">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="input-field"
                    required
                  />
                </div>
                {/* Email FIeld */}
                <div className="form-control mt-6">
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
                {/* Submit Button */}
                <input type="submit" value="Sign Up" className="submit-btn" />
              </form>
              {/* Bottom Content */}
              <div className="text-center mt-8">
                {/* Redirect link to sign up page */}
                <p className="redirect-text">
                  Already registered?{" "}
                  <Link to="/login" className="font-medium hover:underline">
                    Go to log in
                  </Link>
                </p>
                {/* Social Media SignIn */}
                <SMAuthentication/>
                
              </div>
            </div>
            <div className="login-img">
              <img src={loginImg} alt="" className="w-full md:-mt-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
