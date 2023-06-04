import { Helmet } from "react-helmet-async";
import loginImg from "../../../assets/others/authentication2.png";
import bgImg from "../../../assets/others/authentication.png";
import { Link } from "react-router-dom";

import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
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
          <div className="hero-content grid md:grid-cols-2 p-5 md:p-0">
            <div className="flex items-center mx-auto md:my-20">
              <img src={loginImg} alt="" className="w-full md:-mt-20"/>
            </div>
            <div className="md:py-12 md:mr-28">
              <h2 className="text-center text-black text-4xl font-bold mb-5">
                Login
              </h2>
              <form className="">
                {/* Email FIeld */}
                <div className="form-control">
                  <label
                    htmlFor="email"
                    className="text-black2 font-semibold mb-4 text-xl"
                  >
                    Email
                  </label>
                  <input
                    type="email "
                    placeholder="Type here"
                    className="py-5 pl-5 bg-white border-[1px] border-[#d0d0d0] rounded-lg"
                  />
                </div>
                {/* Password Field */}
                <div className="form-control mt-6">
                  <label
                    htmlFor="password"
                    className="text-black2 font-semibold mb-4 text-xl"
                  >
                    Password
                  </label>
                  <input
                    type="password "
                    placeholder="Enter Your Password"
                    className="py-5 pl-5 bg-white border-[1px] border-[#d0d0d0] rounded-lg"
                  />
                </div>
                {/* Captcha Field */}
                <div className="form-control mt-9">
                  <input
                    type="password "
                    placeholder="Type here"
                    className="py-5 pl-5 bg-white border-[1px] border-[#d0d0d0] rounded-lg"
                    readOnly
                    disabled
                  />
                  <p className="text-[#5D5FEF] font-semibold mb-4 mt-1 text-lg">
                    Reload Captcha
                  </p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="py-5 pl-5 bg-white border-[1px] border-[#d0d0d0] rounded-lg"
                  />
                </div>
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-block mt-6 border-0 text-xl font-bold h-16"
                  style={{ background: "rgba(209, 160, 84, 0.7)" }}
                />
              </form>
              <div className="text-center mt-8">
                <p className="text-[#D1A054] text-xl tracking-tighter">
                  New here?{" "}
                  <Link to="" className="font-medium hover:underline">
                    Create a New Account
                  </Link>
                </p>
                <p className="text-black2 text-xl tracking-tighter font-medium mt-6">
                  Or sign in with
                </p>
                <div className="flex gap-x-8 md:gap-x-14 justify-center mt-4 text-2xl">
                  <button className="border-2 rounded-full p-4 hover:text-[#D1A054]">
                    <FaFacebookF />
                  </button>
                  <button className="border-2 rounded-full p-4 hover:text-[#D1A054]">
                    <FaGoogle />
                  </button>
                  <button className="border-2 rounded-full p-4 hover:text-[#D1A054]">
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
