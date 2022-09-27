import React from "react";
import { Link } from "react-router-dom";
import './card.css'

const Card = ({ id, name, image, weight, temperaments }) => {
    return (
      <div className="container">
        <Link className="card" to={"/dogs/" + id}>
          <img className="dog-img" src={image} alt={name}/>
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-weigth">{weight} kg</p>
            {Array.isArray(temperaments) ? (
              <p className="card-temperaments">{temperaments.map(t => Object.values(t)).join(', ')}</p>
            ) : (
              <p className="card-temperaments">{temperaments}</p>
            )}
          </div>
        </Link>
      </div>
    );
  };
  
  export default Card;