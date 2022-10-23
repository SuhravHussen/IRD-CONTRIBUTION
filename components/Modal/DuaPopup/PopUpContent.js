import React from "react";
import PouUpAlpha from "./PouUpAlpha";

function PopUpContent({ alphabets, setModalShow }) {
  return (
    <div className="">
      <div className="mt-4 mb-4 flex justify-center flex-wrap gap-5">
        {alphabets.map((alpha) => (
          <PouUpAlpha setModalShow={setModalShow} key={alpha} alpha={alpha} />
        ))}
      </div>
    </div>
  );
}

export default PopUpContent;
