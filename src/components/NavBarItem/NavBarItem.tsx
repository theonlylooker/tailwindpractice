import React from "react";

interface navBarItemProps {
  data: string;
}

const NavBarItem = ({ data }: navBarItemProps) => {
  return <p>{data}</p>;
};

export default NavBarItem;
