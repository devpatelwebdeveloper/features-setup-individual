import React, { useState } from "react";
import "./FeatureItem.css";

export default function FeatureItem({ title, content, handleFeatureClick }) {
  const [showFeature, SetShowFeature] = useState(false);

  function handleCilick() {
    // handleFeatureClick();
    SetShowFeature(!showFeature);
  }
  const showStyle = {
    display: "block",
    "z-index": "9",
    visibility: "visible"
  };

  return (
    <>
      <div
        className="featureButton"
        style={{ marginBottom: showFeature ? "400px" : " 20px" }}
      >
        <button onClick={handleCilick}>{title}</button>

        <div className="featureGrid" style={showFeature ? showStyle : null}>
          <p>{content}</p>
          <div
            onClick={() => {
              SetShowFeature(false);
            }}
          >
            Close
          </div>
        </div>
      </div>
    </>
  );
}
