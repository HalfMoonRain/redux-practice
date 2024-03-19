import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";
import GrandSonBox from "./component/GrandSonBox";

function App() {
  const count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let pw = useSelector((state) => state.pw);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: { dnum: 1 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "id", pw: "pw" } });
  };
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={increase}> + </button>
      <button onClick={decrement}>-</button>
      <button onClick={login}>login</button>
      <h1>id : {id}</h1>
      <h1>pw : {pw}</h1>
      <Box />
      <GrandSonBox />
    </div>
  );
}

export default App;
