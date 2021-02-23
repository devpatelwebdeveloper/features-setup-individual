import React from "react";
import Features from "./Components/Features";
import "./styles.css";

export default function App() {
  const features = [
    {
      title: "title1",
      content: "content"
    },
    {
      title: "title1",
      content: "content"
    },
    {
      title: "title1",
      content: "content"
    },
    {
      title: "title1",
      content: "content"
    },
    {
      title: "title1",
      content: "content"
    },
    {
      title: "title1",
      content: "content"
    },
    {
      title: "title1",
      content: "content"
    },
    {
      title: "title1",
      content: "content"
    }
  ];
  return (
    <>
      <div className="App">
        <Features featureContents={features} />
      </div>
    </>
  );
}
