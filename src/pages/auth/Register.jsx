import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    // const firstName = fd.get("firstName");
    // const lastName = fd.get("lastName");
    // const username = fd.get("username");
    const email = fd.get("email");
    const passwordOne = fd.get("passwordOne");
    const passwordTwo = fd.get("passwordTwo");

    if (passwordOne !== passwordTwo) {
      setError("Your passwords don't match!");
      return; // <-- simply stop execution
    }

    const password = passwordOne;

    const registrationData = { email, password };

    try {
      await register(registrationData);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleShowPassword = () => {
    if (showPassword) {
      return "text";
    } else {
      return "password";
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-3 h-screen">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="w-xs h-130 rounded-lg shadow-lg flex flex-col items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt=""
                className="rounded-t-lg"
              />
            </div>
            <form
              onSubmit={handleRegistration}
              className="w-[90%] flex flex-col gap-2"
            >
              {/* EMAIL */}
              <fieldset className="border ">
                <legend className="text-xs ml-3 font-semibold">E-Mail</legend>
                <input
                  name="email"
                  type="text"
                  className="pb-1 px-3 w-full focus:outline-none"
                />
              </fieldset>
              {/* PASSWORD */}
              <fieldset className="border ">
                <legend className="text-xs ml-3 font-semibold">Password</legend>
                <div className="relative">
                  <input
                    name="passwordOne"
                    type={handleShowPassword()}
                    className="pb-1 px-3 w-full focus:outline-none"
                    required
                  />
                  {showPassword ? (
                    <FaRegEye
                      className="absolute -translate-y-6 translate-x-65 cursor-pointer"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="absolute -translate-y-6 translate-x-65 cursor-pointer"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </fieldset>
              <fieldset className="border ">
                <legend className="text-xs ml-3 font-semibold">
                  Repeat Password
                </legend>
                <div className="relative">
                  <input
                    name="passwordTwo"
                    type={handleShowPassword()}
                    className="pb-1 px-3 w-full focus:outline-none"
                    required
                  />
                  {showPassword ? (
                    <FaRegEye
                      className="absolute -translate-y-6 translate-x-65 cursor-pointer"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaRegEyeSlash
                      className="absolute -translate-y-6 translate-x-65 cursor-pointer"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </fieldset>
              <div>
                {error && (
                  <>
                    <p className="text-sm text-center">{error}</p>
                  </>
                )}
              </div>

              <button
                type="submit"
                className="text-white text-sm font-semibold px-3 py-2 w-[70%] mx-auto rounded-full bg-lime-600 hover:bg-lime-700 transition"
              >
                Register
              </button>
            </form>
            <div className="mt-5 flex justify-center items-center">
              <hr className="w-28 text-zinc-300" />
              <p className="relative bottom-[1px] text-sm bg-white px-2">or</p>
              <hr className="w-28 text-zinc-300" />
            </div>
            <p>SSO HERE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
