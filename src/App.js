import React, { useState } from "react";
import "./App.css";

function App() {
  const [dogImg, setDogImg] = useState("");
  const [status, setStatus] = useState("");
  const [dogList, setDogList] = useState([]);

  // const onClickHandler = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => response.json())
  //     .then((data) => setDogImg(data.message))
  //     .catch((err) => console.log(err));
  // };

  const onClickHandler = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImg(data.message);
      setDogList([...dogList, data.message]);
    } catch (error) {
      console.log("error", error);
    }
  };

  const showDogList = dogList.map((el, index) => {
    return <img src={el} key={index} alt="dog" className="single-dog" />;
  });

  return (
    <div className="app">
      <div className="list-container">
        <h1 className="title">Dog Gallery</h1>
        <button className="list-btn" onClick={onClickHandler}>
          Get a dog picture
        </button>
        {/* <div>{dogImg && <img src={dogImg} alt="dog" width="400px" />}</div> */}
        <div>{showDogList}</div>
      </div>
    </div>
  );
}

export default App;
