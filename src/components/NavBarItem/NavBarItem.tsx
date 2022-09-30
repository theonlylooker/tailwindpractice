import React from "react";
import { JsxElement } from "typescript";

interface navBarItemProps {
  data: string;
  img: JSX.Element | JSX.Element[];
}

const NavBarItem = ({ data, img }: navBarItemProps) => {
  return (
    <div className="md:grid md:grid-cols-2 gap-3">
      <p>{data}</p>
      <div>{img}</div>
    </div>
  );
};

export default NavBarItem;
