import React from "react";
import "../views/ServiceDetailCards.css";

const ServiceDetailCards = (props) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <li className="fa fa-check serviceIcon"></li>
        <p className="serviceHeading">{props.serviceName}</p>
      </div>
      <div>
        <p className="serviceDetails1">{props.servicePrimaryDesc}</p>
        <p className="serviceDetails2">[{props.serviceSecondaryDesc}]</p>
      </div>
    </>
  );
};

export default ServiceDetailCards;
