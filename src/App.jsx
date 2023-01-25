import { useState, useEffect } from "react";
import "./styles.css";
import Form from "./Form/Form";
import Giphy from "./Giphy/Giphy";

function App() {
  const [setInfo, setImg] = useState({});
  const [giphy, setGiphy] = useState({});

  function liftGiphyImg(gif) {
    setGiphy(gif);
  }

  useEffect(() => {
    const giphyLink = `https://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=ydB9Q93ydrSs3izXNNDV0L01sspI6jSL`;

    async function makeApiCall() {
      try {
        const responseJson = await fetch(giphyLink);
        const data = await responseJson.json();
        setImg(data.data[5].images.original.url);
      } catch (err) {}
    }
    makeApiCall();
  }, [giphy]);

  return (
    <div className="App">
      <h1>MOOD </h1>
      <Form liftGiphyImg={liftGiphyImg} />
      <Giphy giphyData={setInfo} />
    </div>
  );
}

export default App;
