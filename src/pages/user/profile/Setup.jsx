import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router";

const Setup = () => {
  const { user, token } = useAuth();
  const [showFamilyOption, setShowFamilyOption] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleUserDetails = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    const firstName = fd.get("firstName");
    const lastName = fd.get("lastName");
    const username = fd.get("username");

    const updatedDetails = { firstName, lastName, username };

    try {
      const res = await fetch(
        `http://localhost:5000/api/users/${user.id}/profile`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedDetails),
        }
      );

      const data = await res.json();

      console.log("Updated user:", data);
      setShowFamilyOption(true);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleJoinFamilyByCode = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    const code = fd.get("code");

    try {
      const res = await fetch("http://localhost:5000/api/families/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();
      console.log("Added to family:", data);
      navigate("/family_cookbook");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleCreateNewFamily = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);

    const familyName = fd.get("");

    try {
      const res = await fetch("http://localhost:5000/api/families/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(familyName),
      });

      const data = await res.json();
      console.log("Family Created:", data);
      navigate("/family_cookbook");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-3 h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="w-[80%] h-[70%] shadow-md flex flex-col">
            {!showFamilyOption ? (
              <>
                <div className="text-center">
                  <h2>Complete Setup</h2>
                  <p>
                    Thanks again for registering! Time to finish your profile.
                  </p>
                </div>

                <form
                  onSubmit={handleUserDetails}
                  className="flex flex-col w-[90%] mx-auto gap-2"
                >
                  <fieldset className="border ">
                    <legend className="text-xs ml-3 font-semibold">
                      First Name
                    </legend>
                    <input
                      name="firstName"
                      type="text"
                      className="pb-1 px-3 w-full focus:outline-none"
                      required
                    />
                  </fieldset>
                  <fieldset className="border ">
                    <legend className="text-xs ml-3 font-semibold">
                      Last Name
                    </legend>
                    <input
                      name="lastName"
                      type="text"
                      className="pb-1 px-3 w-full focus:outline-none"
                      required
                    />
                  </fieldset>
                  <fieldset className="border ">
                    <legend className="text-xs ml-3 font-semibold">
                      Username
                    </legend>
                    <input
                      name="username"
                      type="text"
                      className="pb-1 px-3 w-full focus:outline-none"
                      required
                    />
                  </fieldset>
                  <button
                    type="submit"
                    className="text-white text-sm font-semibold px-3 py-2 w-[60%] mx-auto rounded-full bg-lime-600 hover:bg-lime-700 transition"
                  >
                    Next
                  </button>
                </form>
              </>
            ) : (
              <>
                <div className="text-center">
                  <p>Join or Create a Family</p>
                </div>
                <div className="flex flex-col items-center">
                  <form
                    onSubmit={handleJoinFamilyByCode}
                    className="flex flex-col gap-3"
                  >
                    <fieldset className="border">
                      <legend className="text-xs ml-3 font-semibold">
                        Family Code
                      </legend>
                      <input
                        name="code"
                        type="text"
                        className="pb-1 px-3 w-full focus:outline-none"
                        required
                      />
                    </fieldset>
                    <button
                      type="submit"
                      className="text-white text-sm font-semibold px-3 py-2 w-xs mx-auto rounded-full bg-lime-600 hover:bg-lime-700 transition"
                    >
                      Join
                    </button>
                  </form>
                </div>
                <div className="mt-5 flex justify-center items-center">
                  <hr className="w-28 text-zinc-300" />
                  <p className="relative bottom-[1px] text-sm bg-white px-2">
                    or
                  </p>
                  <hr className="w-28 text-zinc-300" />
                </div>
                <button
                  type="button"
                  className="text-white text-sm font-semibold px-3 py-2 w-xs mx-auto rounded-full bg-lime-600 hover:bg-lime-700 transition"
                >
                  Create
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Setup;
