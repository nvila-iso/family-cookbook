import { Link } from "react-router";
const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl px-3 h-screen">
        <div className="flex flex-col max-w-5xl justify-center ">
          <div className="grid">
            {/* TITLE */}
            <div className="flex flex-col gap-5">
              <h1 className="text-6xl font-black ">
                A Treasure Trove of Family Recipes
              </h1>
              <p className="font-semibold text-lg">
                A simple place to share recipes with friends, family, and the
                world
              </p>
              <div className="flex gap-3 justify-center mb-5">
                <Link
                  to=""
                  className="bg-lime-500 px-3 py-3 rounded-lg shadow-md font-semibold hover:bg-lime-600 hover:shadow-sm transition"
                >
                  Create Family Cookbook
                </Link>
                <Link
                  to="browse"
                  className="bg-zinc-300 hover:bg-zinc-400 px-3 py-3 rounded-lg shadow-md font-semibold transition"
                >
                  Start Exploring Recipes
                </Link>
              </div>
            </div>
            {/* IMAGE SECTION */}
            <div>
              <img
                src="https://bakerbynature.com/wp-content/uploads/2024/08/Chicken-Noodle-Soup-28-500x500.jpg"
                alt=""
                className="rounded-lg size-120"
              />
              <img
                src="https://m.media-amazon.com/images/I/81oyKEjy-ML._AC_UF1000,1000_QL80_.jpg"
                alt=""
                className="border-5 border-white absolute h-[20%] bottom-[-1.2rem] rounded-tr"
              />
            </div>
          </div>
        </div>
        {/* <div className="grid lg:grid-cols-2 gap-3">
          <div className="flex flex-col justify-center  gap-5">
            <h1 className="text-6xl font-black ">
              A Treasure Trove of Family Recipes
            </h1>
            <p className="font-semibold text-lg">
              A simple place to share recipes with friends, family, and the
              world
            </p>
            <div className="flex gap-5 mx-auto">
              <Link
                to=""
                className="bg-lime-500 px-3 py-3 rounded-lg shadow-md font-semibold hover:bg-lime-600 hover:shadow-sm transition"
              >
                Create Family Cookbook
              </Link>
              <Link
                to="browse"
                className="bg-zinc-300 hover:bg-zinc-400 px-3 py-3 rounded-lg shadow-md font-semibold transition"
              >
                Start Exploring Recipes
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img
              src="https://bakerbynature.com/wp-content/uploads/2024/08/Chicken-Noodle-Soup-28-500x500.jpg"
              alt=""
              className="absolute rounded-lg size-120"
            />
            <img
              src="https://m.media-amazon.com/images/I/81oyKEjy-ML._AC_UF1000,1000_QL80_.jpg"
              alt=""
              className="self-start border-5 border-white relative top-50 h-[30%] rounded-lg shadow-md"
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
