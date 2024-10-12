import React, { useState, useEffect, useRef } from "react";
import { pi } from "./config";

function App() {
  const [time, setTime] = useState("");
  const [highlightedPi, setHighlightedPi] = useState(pi);
  const highlightRef = useRef(null); 

  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setTime(`${hours}${minutes}`);
  };

  useEffect(() => {
    updateTime(); 
    const intervalId = setInterval(updateTime, 1000);
    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  useEffect(() => {
    const firstIndex = pi.indexOf(time);
    if (firstIndex !== -1) {
      const before = pi.substring(0, firstIndex);
      const after = pi.substring(firstIndex + time.length);
      setHighlightedPi(
        <>
          {before}
          <span 
            ref={highlightRef} 
            className="bg-red-500 text-white text-3xl tracking-widest px-2 mx-2 rounded-md"
          >
            {time}
          </span>
          {after}
        </>
      );

      // Scroll to the highlighted element
      setTimeout(() => {
        highlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 0); // Delay scrolling to ensure the DOM updates first
    } else {
      setHighlightedPi(pi); 
    }
  }, [time]);

  return (
    <div className="flex w-screen h-screen bg-gray-800 overflow-y-auto">
      <div className="w-full h-fit p-4">
        <p className="break-words text-gray-500 text-center text-sm md:text-xl tracking-widest select-none">
          {highlightedPi}
        </p>
      </div>
    </div>
  );
}

export default App;