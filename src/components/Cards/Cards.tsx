import React from "react";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <Card name="5 bean chilli stew" author="Mario" img="chilli-bean.jpg" />
      <Card name="5 bean chilli stew" author="Mario" img="pollo-curry.jpg" />
      <Card name="5 bean chilli stew" author="Mario" img="ramen-japones.jpg" />
    </div>
  );
};

export default Cards;
