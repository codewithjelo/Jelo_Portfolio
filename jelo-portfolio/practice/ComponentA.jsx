import React, { useState, useContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = React.createContext();

function ComponentA() {
  const [user, setUser] = useState("Jelo");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello, ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
