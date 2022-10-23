import React from "react";

function PouUpAlpha({ alpha, setModalShow }) {
  const handleView = () => {
    document.getElementById(alpha)?.scrollIntoView({ behavior: "smooth" });
    setModalShow(false);
  };

  return (
    <div>
      <p
        onClick={handleView}
        className="w-14 h-14 font-poppins font-normal text-[1.75rem] leading-10 px-3 py-1  hover:bg-[#EFEFEF] text-title flex items-center justify-center col-start-3  dark:hover:bg-[#324D6B]">
        {alpha}
      </p>
    </div>
  );
}

export default PouUpAlpha;
