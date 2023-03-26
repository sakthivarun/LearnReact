import React from "react";
import { useState } from "react";

function ButtonFile(props:any) {

  return (
    <>
      <button onClick={props.onClick}>CLick {props.count}</button>
    </>
  );
}

export default ButtonFile;
