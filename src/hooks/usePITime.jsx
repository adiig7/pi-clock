import { useState, useEffect, useRef, useContext } from "react";
import { pi } from "../config";
import { TimeFormatContext } from "../context/TimeFormatProvider";

const usePITime = () => {
  const { is24HourFormat } = useContext(TimeFormatContext);
  const [time, setTime] = useState("");
  const [highlightedPi, setHighlightedPi] = useState(pi);
  const highlightRef = useRef(null);

  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");

    if (!is24HourFormat) {
      hours = hours > 12 ? hours % 12 : hours;
    }
    const formattedHours = String(hours).padStart(2, "0");

    setTime(`${formattedHours}${minutes}`);
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [is24HourFormat]);

  useEffect(() => {
    const firstIndexCurrentTime = pi.indexOf(time);
    if (firstIndexCurrentTime !== -1) {
      const before = pi.substring(0, firstIndexCurrentTime);
      const after = pi.substring(firstIndexCurrentTime + time.length);
      setHighlightedPi(
        <>
          {before}
          <span
            ref={highlightRef}
            className="bg-red-500 text-white text-3xl tracking-widest px-2 mx-2 rounded-md"
          >
            {time.slice(0, 2)}:{time.slice(2)}
          </span>
          {after}
        </>
      );

      setTimeout(() => {
        highlightRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 0);
    } else {
      setHighlightedPi(pi);
    }
  }, [time]);

  return { highlightedPi };
};

export default usePITime;