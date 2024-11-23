import { useState } from "react";

function Color() {
  const [TOC, STOC] = useState("hex"); //TypeOfColor,SetTypeOfColor
  const [color, setColor] = useState("#000000"); //background color actually set garne statehook

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);   
  }

  function CCH() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function CCR() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    const rgb = `rgb(${r},${g},${b})`;
    console.log(rgb);
    setColor(rgb);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => STOC("hex")}>Create HEX Color</button>
      <button onClick={() => STOC("rgb")}>Create RGB Color</button>
      <button onClick={TOC === "hex" ? CCH : CCR}>
        Generate a random color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
          gap:"40px",
          flexDirection:"column",
        }}
      >
        <h3 >{TOC==='rgb'?'RGB Color':'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default Color;
