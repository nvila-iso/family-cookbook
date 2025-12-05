import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const FamilyDetails = () => {
  const [error, setError] = useState(null);
  const { token } = useAuth();
  const navigate = useNavigate();

  // JOIN BY CODE
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

  // CREATE FAMILY
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
      <div className="text-center">
        <p>Join or Create a Family</p>
      </div>
      <div className="flex flex-col items-center">
        <form onSubmit={handleJoinFamilyByCode} className="flex flex-col gap-3">
          <fieldset className="border">
            <legend className="text-xs ml-3 font-semibold">Family Code</legend>
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
        <p className="relative bottom-[1px] text-sm bg-white px-2">or</p>
        <hr className="w-28 text-zinc-300" />
      </div>
      <button
        type="button"
        className="text-white text-sm font-semibold px-3 py-2 w-xs mx-auto rounded-full bg-lime-600 hover:bg-lime-700 transition"
      >
        Create
      </button>
    </>
  );
};

export default FamilyDetails;
