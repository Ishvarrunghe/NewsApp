import React from "react";

const Cards = ({ data }) => {
  // if (!data.length) return null;

  return (
    <div className="cardsContainer">
      {data.map((item, index) => {
        if (!item.urlToImage) {
          return null;
        } else {
          return (
            <div className="card">
              <img src={item.urlToImage} alt={item.title} />

              <p className="title">{item.title}</p>

              <p className="description">{item.description}</p>

              <a href={item.url} target="_blank" rel="noreferrer">
                <button>Read More</button>
              </a>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cards;
