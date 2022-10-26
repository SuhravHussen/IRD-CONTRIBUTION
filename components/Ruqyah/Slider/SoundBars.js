import React from "react";

export default function SoundBars({ isSoundBarActive }) {
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let left = 1;

  return (
    <div id="bars" className="overflow-hidden">
      <div>
        {Array(60)
          .fill("")
          .map((_, i) => {
            left = left + 10;
            return (
              <div
                key={i}
                style={{
                  left: `${left}px`,
                  animationDuration: `${getRandomArbitrary(400, 500)}ms`,
                }}
                className={`bar ${isSoundBarActive ? "animation-active" : ""}`}></div>
            );
          })}
      </div>
    </div>
  );
}
