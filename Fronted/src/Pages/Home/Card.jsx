import React from "react";

const Card = ({ data }) => {
  const { product_name, description, price } = data;
  return (
    <div>
      <div className="card bg-base-100 w-64 h-64 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{product_name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
