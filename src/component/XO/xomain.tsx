import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyButton() {
  return <button className="botton">X</button>;
}

function XoMain() {
  return (
    <>
      <MyButton></MyButton>
    </>
  );
}

export default XoMain;
