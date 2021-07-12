import React from "react";
import "../views/PriceCards.css";

const PriceCards = (props) => {
  const offers = props.feature;

  return (
    <div className="col-md-4 ">
      <div className="blog-item mb-30 " style={{ marginTop: "7%" }}>
        <div className="content wholeArea">
          <div className="centerItems">
            <p className="boldInfo">{props.type}</p>
            <span style={{ fontSize: "14px" }}>{props.typetext}</span>
          </div>
          <hr />
          <div className="centerItems">
            <p className="boldInfo">{props.price}</p>
            <button className="btn btn-primary" onClick={props.choose}>
              Choose
            </button>
          </div>
          <div className="bonus-details-area">
            <ul>
              {offers.map((ft) => (
                <li>{ft}</li>
              ))}
            </ul>
            <p className="moreText">And Much More...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCards;
