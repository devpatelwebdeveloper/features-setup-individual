import React, { useState } from "react";
import FeatureItem from "./FeatureItem";
import "./Features.css";

export default function Features({ featureContents }) {
  const [activeFeature, setActiveFeature] = useState(null);
  const [featureRow, setFeatureRow] = useState(null);
  const [activeId, setActiveId] = useState(null);

  //Rounding
  const roundToX = (num, x) => {
    return Math.ceil(num / x) * x;
  };

  // Click to open content

  const handleFeatureClick = (featureId, index) => {
    // const itemRow = roundToX(index + 1, 4) / 4;
    if (featureId === activeFeature) {
      setActiveFeature(null);
      setFeatureRow(null);
    } else {
      setActiveFeature(featureId);
      // setFeatureRow(itemRow);
      // setActiveId(index);
    }
  };
  return (
    <>
      <div className="features">
        {featureContents.map((featureContent, index) => (
          <FeatureItem
            key={`feature-${index}`}
            title={featureContent.title}
            content={featureContent.content}
            handleFeatureClick={() => {
              handleFeatureClick(featureContent, index);
            }}
          />
        ))}
      </div>
    </>
  );
}
