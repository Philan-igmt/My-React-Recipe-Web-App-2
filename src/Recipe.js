import React from "react";

const Recipe = ({ key, tittle, calories, image, ingredients }) => {
  return (
    <div className="continer">
      <div className="row">
        <div className="col s12 m6">
          <div className="card z-index">
            <div className="card-image center">
              <img
                style={{ width: "450px", height: "400px" }}
                src={image}
                alt=""
              />
              <span className="card-title">{tittle}</span>
            </div>
            <div>
              {ingredients.map((ingred) => (
                <span key={key}>{ingred.text}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
