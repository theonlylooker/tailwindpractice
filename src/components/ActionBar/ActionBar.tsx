import React from "react";
import useNav from "../../Hooks/useNav";
import NavBar from "../NavBar/NavBar";

const ActionBar = () => {
  const [handleClick, nav] = useNav();
  return (
    <div className="m-3">
      <div className="flex justify-between align-middle ">
        <h1 className="uppercase">food onlylooker</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 md:hidden"
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <NavBar nav={nav} />
    </div>
  );
};

export default ActionBar;
