import { func } from "prop-types";
import React, { useState } from "react";

// function MyComponents() {
//   

//   return (
//     <div>
//       <input type="text" value={name} onChange={handleNameChange} />
//       <p>Name: {name}</p>

//       <input type="number" value={quantity} onChange={handleQuantityChange} />
//       <p>Quantity: {quantity}</p>

//       <textarea
//         value={comment}
//         onChange={handleCommentChange}
//         placeholder="Enter delivery instructions"
//       />
//       <p>Comment: {comment}</p>

//       <select value={payment} onChange={handlePaymentChange}>
//         <option value="">Select Payment Method</option>
//         <option value="Visa">Visa</option>
//         <option value="Mastercard">Mastercard</option>
//         <option value="Giftcard">Giftcard</option>
//       </select>
//       <p>Payment Method: {payment}</p>

//       <label>
//         <input
//           type="radio"
//           value="Pick Up"
//           checked={shipping === "Pick Up"}
//           onChange={handleShippingChange}
//         />
//         Pick Up
//       </label> <br />
//       <label>
//         <input
//           type="radio"
//           value="Delivery"
//           checked={shipping === "Delivery"}
//           onChange={handleShippingChange}
//         />
//         Delivery
//       </label>
//         <p>Shipping Method: {shipping}</p>
//     </div>
//   );
// }

function MyComponents() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  const increment = () => {
    setCount((c) => c + 3);
  };

  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default MyComponents;
