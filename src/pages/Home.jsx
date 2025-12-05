import CommonButton from "../components/commonUI/CommonButton";

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl px-3 h-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="grid sm:grid-cols-2">
            {/* TITLE */}
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl md:text-5xl font-black ">
                A Treasure Trove of Family Recipes
              </h1>
              <p className="font-semibold text-lg">
                A simple place to share recipes with friends, family, and the
                world
              </p>
              <div className="flex gap-3">
                <CommonButton label="Create Cookbook" url="/register" />
                <CommonButton label="Explore Recipes" url="/family_cookbook" variant="secondary"/>
              </div>
            </div>
            {/* IMAGE SECTION */}
            <div className="flex relative justify-center top-10 sm:top-0">
              <img
                src="https://bakerbynature.com/wp-content/uploads/2024/08/Chicken-Noodle-Soup-28-500x500.jpg"
                alt=""
                className="rounded-lg h-[70%] sm:h-[90%] md:h-[100%] shadow-md"
              />
              <img
                src="https://m.media-amazon.com/images/I/81oyKEjy-ML._AC_UF1000,1000_QL80_.jpg"
                alt=""
                className="border-5 border-white absolute top-50 md:top-70 lg:top-80 left-10 sm:left-0 h-[35%] sm:h-[45%] rounded-tr shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
