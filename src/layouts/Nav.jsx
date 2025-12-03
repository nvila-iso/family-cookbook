import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const { token, logout } = useAuth();

  return (
    <>
      <div className="flex items-center justify-between px-5 py-1 border-b border-black/10">
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>
        {!token ? (
          <div className="flex items-center gap-5 font-semibold text-lg">
            <Link to="/login" className="hover:italic transition">
              login
            </Link>
            <Link
              to="/register"
              className="bg-lime-600 px-3 py-1 rounded text-white shadow-md hover:shadow-sm hover:bg-lime-700 transition"
            >
              register
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login" onClick={logout} className="bg-black text-white px-3 py-1 rounded hover:bg-black/60 transition ">
              logoff
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
