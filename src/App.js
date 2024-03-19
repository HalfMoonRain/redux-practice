import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <button onClick={increase}> + </button>
      <h1>count : {count}</h1>
    </div>
  );
}

export default App;
