import React, { useState } from "react";

const useNav = (): [() => void, boolean] => {
  const [nav, setNav] = useState(true);
  const handleClick = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  return [handleClick, nav];
};

export default useNav;
