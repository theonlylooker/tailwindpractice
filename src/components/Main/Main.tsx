import React from "react";
import SectionP from "../SectionP/SectionP";
import Session from "../Session/Session";

const Main = () => {
  return (
    <main className="bg-gray-100 col-span-2">
      <div className="m-8">
        <Session />
        <SectionP />
      </div>
    </main>
  );
};

export default Main;
