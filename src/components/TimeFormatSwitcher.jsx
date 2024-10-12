import { useContext } from "react";
import { TimeFormatContext } from "../context/TimeFormatProvider";

const TimeFormatSwitcher = () => {
    const { is24HourFormat, setTimeFormat } = useContext(TimeFormatContext);

  const baseClasses = "px-6 py-2 text-center text-lg rounded-xl";

  return (
    <div className="absolute right-4 bottom-2 md:right-8 bg-gray-300 rounded-md pb-1 px-2 opacity-80 md:opacity-50 hover:opacity-100 hover:cursor-pointer">
      <h2 className="text-center font-bold text-md py-0.5">Time Format</h2>
      <div className="flex rounded-xl">
        <div
          className={`${baseClasses} ${
            is24HourFormat
              ? "bg-gray-200 text-black"
              : "bg-black text-green-500"
          }`}
          onClick={() => {
            setTimeFormat(false);
          }}
        >
          12
        </div>
        <div
          className={`${baseClasses} ${
            is24HourFormat
              ? "bg-black text-green-500"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => {
            console.log(is24HourFormat);
            setTimeFormat(true);
          }}
        >
          24
        </div>
      </div>
    </div>
  );
};

export default TimeFormatSwitcher;
