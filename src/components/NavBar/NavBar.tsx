import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";

const NavBar = () => {
  const itemList: string[] = ["home", "about", "contact"];
  return (
    <nav className="m-5">
      <ul>
        {itemList &&
          itemList.map((item, index) => (
            <li>
              <NavBarItem key={index} data={item} />
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavBar;
