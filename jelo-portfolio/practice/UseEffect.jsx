import React, { useState, useEffect, use } from "react";

// function UseEffect() {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("green");

//   useEffect(() => {
//     document.title = `Count: ${count} ${color}`;
//   }, [count, color]);

//   function addCount() {
//     setCount(c => c + 1);
//   };
  
//   function subtractCount() {
//     setCount(c => c - 1);
//   };

//   function changeColor() {
//     setColor(c => c === "green" ? "red" : "green");
//   }

//   return (
//   <div>
//     <p style={{color: color}}>Count: {count}</p>
//     <button onClick={addCount}>Add</button>
//     <button onClick={subtractCount}>Subtract</button><br />
//     <button onClick={() => changeColor("red")}>Change Color</button> 
//   </div>);
// }

function UseEffect() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        console.log("Resized");

        return () => {
            window.removeEventListener("resize", updateDimensions);
            console.log("Cleanup");
        }
    });

    useEffect(() => {
        document.title = `Width: ${width}px, Height: ${height}px`;
    }, [width, height]);


    function updateDimensions() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

  return (
  <div>
    <p>Width: {width}px</p>
    <p>Height: {height}px</p>
  </div>);
}

export default UseEffect;
