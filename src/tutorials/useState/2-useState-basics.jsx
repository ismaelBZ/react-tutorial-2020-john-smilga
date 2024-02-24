import { useState } from "react";

export default function UseStateBasics() {
  const [data, setData] = useState("Show Data");
  let newData = data[0];

  const handleClick = () => {
    const newData = data;
    newData === "Show Data" ? setData("New Data") : setData("Show Data");
  };

  return (
    <>
      <h1>{data}</h1>
      <button className="btn" onClick={handleClick}>
        Change Data
      </button>
    </>
  );
}
