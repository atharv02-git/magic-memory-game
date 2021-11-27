import React from "react";

// styles
import "./SingleCard.css";
export default function SingleCard({ cardProp, handleChoiceProp, flipped, disabled }) {
  const cardBackClickHandler = () => {
    if(!disabled){
      handleChoiceProp(cardProp);   
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={cardProp.src} alt="card-front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={cardBackClickHandler}
          alt="card-back"
        />
      </div>
    </div>
  );
}
