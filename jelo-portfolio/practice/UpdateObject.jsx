import React, { useState } from "react";

function UpdateObject() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Toyota",
    model: "Corolla",
  });

  function handleYearChange(event) {
    setCar(prevCar => ({
      ...prevCar,
      year: event.target.value,
    }));
  }

  function handleMakeChange(event) {
    setCar((prevCar) => ({
      ...prevCar,
      make: event.target.value,
    }));
  }

  function handleModelChange(event) {
    setCar((prevCar) => ({
      ...prevCar,
      model: event.target.value,
    }));
  }

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}
export default UpdateObject;
