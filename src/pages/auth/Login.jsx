import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import { FaUserCircle } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();
  const { login, token } = useAuth();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const email = fd.get("email");
    const password = fd.get("password");

    const credentials = { email, password };

    try {
      const data = await login(credentials);

      if (!data.user.firstName || !data.user.lastName || !data.user.username) {
        navigate("/setup");
      } else {
        navigate("/family_cookbook");
      }
    } catch (error) {
      if (error === `{"error":"User not found"}`) {
        setError("User not found");
      } else {
        setError(error);
      }
    }
  };

  return (
    <>
      <div className="max-w-6xl h-screen px-3 mx-auto">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="w-xs h-115 rounded-lg shadow-lg flex flex-col items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt=""
                className="rounded-t-lg"
              />
            </div>
            <form
              onSubmit={handleLogin}
              className="flex flex-col justify-center items-center h-full"
            >
              <p className="font-semibold mb-1">Welcome back, friendo</p>
              <div className="flex flex-col gap-2">
                <fieldset className="border ">
                  <legend className="text-xs ml-3 font-semibold">E-Mail</legend>
                  <input
                    name="email"
                    type="text"
                    className="pb-1 px-3 w-full focus:outline-none"
                    required
                  />
                </fieldset>
                <fieldset className="border ">
                  <legend className="text-xs ml-3 font-semibold">
                    Password
                  </legend>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="pb-1 px-3 w-full focus:outline-none"
                    required
                  />
                </fieldset>
              </div>
              <div className="w-full flex justify-between items-center text-xs mb-3">
                <div>
                  <p>{error}</p>
                </div>
                <Link to="" className="italic underline">
                  forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="text-white text-sm font-semibold px-3 py-2 w-full rounded-full bg-lime-600 hover:bg-lime-700 transition"
              >
                Log in
              </button>
              <div className="flex justify-between">
                <Link to="/register" className="text-xs italic underline">
                  create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
