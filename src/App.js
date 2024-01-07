// App.js
import React, { useState } from 'react';
import './App.css'; // You can define your styles in App.css
import vedio1 from "./vedio/thala1.mp4"; // I assume you have this video in the appropriate folder
import { useEffect } from 'react';
import vedio2 from "./vedio/vedio3.mp4"
import image1 from "./vedio/image1.jpg"

function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [videoSource, setVideoSource] = useState(''); // State to store the selected video source
  const [videoEnded, setVideoEnded] = useState(false);
  const [bgClass, setBgClass] = useState('');


  useEffect(() => {
    const randomVideo = Math.random() < 0.5 ? vedio1 : vedio2;
    setVideoSource(randomVideo);
  }, []);

  // Function to handle video end
  const handleVideoEnd = () => {
    setVideoEnded(true); // Set the state to true when video ends
  };

  useEffect(() => {
    if (videoEnded) {
      window.location.reload(); // Reload the page when video ends
    }
  }, [videoEnded]);

  useEffect(() => {
    // Function to randomly select a video when the component mounts
    const randomVideo = Math.random() < 0.5 ? vedio1 : vedio2;
    setVideoSource(randomVideo);
  }, []);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = countAlphabetsAndCheckLength(inputValue);

    if (result) {
      setDisplayText(result);
      setDisplayText2("THALA FOR A REASON !");
      setBgClass('blackBackground');
    } else {
      setDisplayText('');
      alert("Thala says, Seven is the Secret Number!");
    }

  };

  const countAlphabetsAndCheckLength = (input) => {
    const cleanedInput = input.replace(/\s/g, "");

    if (cleanedInput.length === 7) {
      return formatString(cleanedInput);
    }

    try {
      const result = eval(cleanedInput);
      if (result === 7) {
        return formatString(cleanedInput);
      }
    } catch (error) {
      return false;
    }
    return false;
  };
  
  const formatString = (input) => {
    const isExpression = input.includes("+") || input.includes("-");

    if (isExpression) {
      const result = eval(input);
      return `${input}=${result}`;
    } else {
      const formattedString = input.toUpperCase().split("").join(" + ") + " = 7";
      return formattedString;
    }
  };

  return (
    <>
    { console.log(videoSource)}
      {displayText === "" ? <></> : <video
        id={videoSource ==="/static/media/vedio3.de20ad8618a27b61ecb9.mp4"? "lopa" : `backgroundVideo`}
        loop
        autoPlay
        muted={false}
        className="life-one-photo-video"
        onEnded={handleVideoEnd} // Call handleVideoEnd when video ends
      >
        <source src={videoSource} />
      </video>}
      <div className={videoSource ==="/static/media/vedio3.de20ad8618a27b61ecb9.mp4"? `papa ${bgClass}` : `App`}>
        <h1 id="textDisplay">{displayText}</h1>
        <h1 id="textDisplay2">{displayText2}</h1>
        <form id="thalaForm" className="thala" onSubmit={handleSubmit}>
          <input
            type="text"
            id="thalaInput"
            name="thalaInput"
            placeholder="THALA for what reason ?"
            required
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Check</button>
        </form>
        { }


      </div>
    </>

  );
}

export default App;
