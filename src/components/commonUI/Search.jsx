import { useState, useRef } from "react";
import { useClickOutside } from "./useClickOutside";

const Search = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setOpen(false));
  return (
    <>
      <input
        id="search"
        type="text"
        placeholder="Search recipes, family and friends..."
        className="text-lg border-b border-black/10 px-5 py-2 w-full focus:outline-none"
        autocomplete="off"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          ref={dropdownRef}
          id="nav-filters"
          className="w-full h-34 shadow-sm bg-white absolute grid grid-cols-3 px-10 py-4 justify-center items-center"
        >
          <div className="text-center">checkboxes</div>
          <div className="text-center">checkboxes</div>
          <div className="text-center">checkboxes</div>
        </div>
      )}
    </>
  );
};

export default Search;
