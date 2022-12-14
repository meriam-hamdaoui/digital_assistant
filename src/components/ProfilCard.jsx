import React from "react";

const ProfilCard = (el) => {
  const { src, twiter, info } = el;
  return (
    <div>
      <img src={src} alt={twiter} />
      <small>{twiter}</small>
      <p>{info}</p>
    </div>
  );
};

export default ProfilCard;
