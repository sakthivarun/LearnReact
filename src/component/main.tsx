import React from "react";
import { useState } from "react";

import MainButtonFile from "./mainButtonFIle";
import XoMain from "./XO/xomain";

function Main() {
  const [clickCount, setClickCount] = useState(0);

  function clickButton() {
    setClickCount(clickCount + 1);
  }

  return (
    <>
      {/* MainButtonFIle - to have a same data over different components */}
      <MainButtonFile />

      {/* XoMain is for XO game */}
      <div className="clmd-12">
      <XoMain />
      </div>
    </>
  );
}

export default Main;
