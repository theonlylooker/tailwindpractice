import React from "react";

interface CardProps {
  name: string;
  author: string;
  img: string;
}

const Card = ({ name, author, img }: CardProps) => {
  return (
    <div className="mt-8 overflow-hidden rounded bg-white shadow-md">
      <img className="w-full h-32 sm:h-48 object-cover" src={img} />
      <div className="m-4">
        <h2>{name}</h2>
        <h3>{author}</h3>
      </div>
      <div>
        {/* scv*/}
        <p></p>
      </div>
    </div>
  );
};

export default Card;
