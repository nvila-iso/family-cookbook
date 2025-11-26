import { Link } from "react-router";

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 py-1 border-b border-black/10">
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>

        <div className="flex items-center gap-5 font-semibold text-lg">
          <Link to="" className="hover:italic transition">
            login
          </Link>
          <Link
            to=""
            className="bg-lime-600 px-3 py-1 rounded text-white shadow-md hover:shadow-sm hover:bg-lime-700 transition"
          >
            register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
