import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const UserDetails = ({ setShowFamilyOption }) => {
  const [error, setError] = useState(null);
  const { user,token } = useAuth();

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
  return (
    <>
      <div className="text-center">
        <h2>Complete Setup</h2>
        <p>Thanks again for registering! Time to finish your profile.</p>
      </div>
      <form
        onSubmit={handleUserDetails}
        className="flex flex-col w-[90%] mx-auto gap-2"
      >
        <fieldset className="border ">
          <legend className="text-xs ml-3 font-semibold">First Name</legend>
          <input
            name="firstName"
            type="text"
            className="pb-1 px-3 w-full focus:outline-none"
            required
          />
        </fieldset>
        <fieldset className="border ">
          <legend className="text-xs ml-3 font-semibold">Last Name</legend>
          <input
            name="lastName"
            type="text"
            className="pb-1 px-3 w-full focus:outline-none"
            required
          />
        </fieldset>
        <fieldset className="border ">
          <legend className="text-xs ml-3 font-semibold">Username</legend>
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
  );
};

export default UserDetails;
