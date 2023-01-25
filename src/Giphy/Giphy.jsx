import React from "react";

export default function Giphy({ giphyData }) {
  return (
    <div className="title">
      <img src={giphyData} alt="url" />
    </div>
  );
}
