import React from "react";

// styles
import "./SingleCard.css";

export default function SingleCard({ cardProp }) {
  return (
    <div className="card">
      <img className="front" src={cardProp.src} alt="card-front" />
      <img className="back" src="/img/cover.png" alt="card-back" />
    </div>
  );
}
