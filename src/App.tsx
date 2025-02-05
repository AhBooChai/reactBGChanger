import { useState } from "react";

type ColorProps = {
  textColor: string;
  bgColor: string;
};

const App = () => {
  const [color, setColor] = useState<ColorProps>({
    textColor: "black",
    bgColor: "white",
  });

  return (
    <div
      className="w-full h-screen duration-300 flex justify-center items-center"
      style={{ backgroundColor: color.bgColor, color: color.textColor }}
    >
      <h1>Manel Ariapala</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor({ textColor: "red", bgColor: "pink" })}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-pink-600"
          >
            Pink
          </button>
          <button
            onClick={() => setColor({ textColor: "pink", bgColor: "red" })}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-red-600"
          >
            Red
          </button>
          <button
            onClick={() => setColor({ textColor: "pink", bgColor: "green" })}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-green-600"
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
