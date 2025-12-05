import { useState } from "react";
import { useNavigate } from "react-router";
import UserDetails from "../../../components/setup/UserDetails";
import FamilyDetails from "../../../components/setup/FamilyDetails";

const Setup = () => {
  const [showFamilyOption, setShowFamilyOption] = useState(false);

  return (
    <>
      <div className="max-w-6xl mx-auto px-3 h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="w-[80%] h-[70%] shadow-md flex flex-col">
            {!showFamilyOption ? (
              <UserDetails setShowFamilyOption={setShowFamilyOption} />
            ) : (
              <FamilyDetails />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Setup;
