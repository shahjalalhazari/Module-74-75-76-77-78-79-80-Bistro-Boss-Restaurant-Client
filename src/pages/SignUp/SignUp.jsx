import { Helmet } from "react-helmet-async";
import loginImg from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { Link, useNavigate } from "react-router-dom";
import SMAuthentication from "../shared/SMAuthentication/SMAuthentication";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL).then(() => {
        reset();
        Swal.fire({
          title: "Success!",
          text: "Account Created Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/");
      });
    });
  };
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
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <div className="form-control">
                  <label htmlFor="name" className="label-text">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Type Your Full Name"
                    className="input-field"
                  />
                  {/* Display Errors */}
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-control mt-6">
                  <label htmlFor="email" className="label-text">
                    E-mail
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter Your E-mail"
                    className="input-field"
                  />
                  {/* Display Errors */}
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>

                {/* Password Field */}
                <div className="form-control mt-6">
                  <label htmlFor="password" className="label-text">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="Enter Your Password"
                    className="input-field"
                  />
                  {/* Display Errors */}
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must have 6 characters.
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less then 20 characters.
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one uppercase, one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>

                {/* Photo Url Field */}
                <div className="form-control mt-6">
                  <label htmlFor="photoURL" className="label-text">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Enter Your Photo URL"
                    className="input-field"
                  />
                  {/* Display Errors */}
                  {errors.photoURL && (
                    <span className="text-red-600">PHoto URL is required</span>
                  )}
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
                <SMAuthentication />
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
