import React from "react";

function Cards(props) {
  return (
    <div className="cards ms-3">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Cards;
