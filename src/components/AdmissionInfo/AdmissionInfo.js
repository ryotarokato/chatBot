import React from "react";

import "./AdmissionInfo.css";

const AdmissionInfo = (props) => {
  const options = [
    { text: "Your Text Here", 
      handler:props.actionProvider.handleAdmissionsList, 
      id: 2 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="admission-info-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="admission-info-container">{optionsMarkup}</div>;
};

export default AdmissionInfo;
