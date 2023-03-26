import React from "react";
import { useState } from "react";

import ButtonFile from "./buttonFile";

function MainButtonFile() {

  const [clickCount, setClickCount] = useState(0);

  function clickButton() {
    setClickCount(clickCount+1)
  }

  return (
    <>
      <ButtonFile count={clickCount} onClick={clickButton}/>
      <ButtonFile count={clickCount} onClick={clickButton}/>
    </>
  );
}

export default MainButtonFile;
