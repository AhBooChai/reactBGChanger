import { useState } from "react";

type ColorsProps = {
  color: string;
  backgroundColor: string;
};
const BGColor = ({ color, backgroundColor }: ColorsProps) => {
  const [colors, setColors] = useState({
    color: "black",
    backgroundColor: "white",
  });

  return (
    <div
      className="w-full h-screen duration-300 flex justify-center items-center"
      style={{ backgroundColor: colors.backgroundColor, color: colors.color }}
    >
      <h1>Manel Chardonnens</h1>
      <div className="fixed flex flex-wrap justify-center botton-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() =>
              setColors({ ...colors, color: "red", backgroundColor: "pink" })
            }
            className="outline-none px-4 py-1 rounded-full shadow-lg text-pink-600"
          >
            Pink
          </button>
          <button
            onClick={() =>
              setColors({ ...colors, color: "pink", backgroundColor: "green" })
            }
            className="outline-none px-4 py-1 rounded-full shadow-lg text-green-600"
          >
            Green
          </button>
          <button
            onClick={() =>
              setColors({ ...colors, color: "pink", backgroundColor: "red" })
            }
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white-600"
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
};

export default BGColor;
