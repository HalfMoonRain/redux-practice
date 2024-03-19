import React from "react";
import { useSelector } from "react-redux";
const Box = () => {
  let count = useSelector((state) => state.count);
  return <div>payload {count}</div>;
};

export default Box;
