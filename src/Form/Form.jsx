import { useState } from "react";

export default function Form({ liftGiphyImg }) {
  const [gif, setGif] = useState("");

  function handleChange(e) {
    setGif(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    liftGiphyImg(gif);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Search All Gifs"
        type="text"
        onChange={handleChange}
        value={gif}
      />

      <button type="submit"> Search </button>
    </form>
  );
}
