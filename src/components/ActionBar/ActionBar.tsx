import React from "react";
import NavBar from "../NavBar/NavBar";

const ActionBar = () => {
  return (
    <div>
      <div className="flex justify-between m-5  ">
        <h1 className="uppercase">food onlylooker</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 md:hidden"
          onClick={() => alert("a")}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <NavBar />
    </div>
  );
};

export default ActionBar;
