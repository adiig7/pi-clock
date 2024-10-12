import usePITime from "../hooks/usePITime";

const PI = () => {
  const { highlightedPi } = usePITime();
  return (
    <p className="break-words text-gray-500 my-4 text-center md:text-left text-sm md:text-xl tracking-widest select-none">
      {highlightedPi}
    </p>
  );
};

export default PI;
