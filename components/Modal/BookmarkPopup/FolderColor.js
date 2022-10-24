import React from "react";

function FolderColor({ setColor, color }) {
  return (
    <label className="block">
      <div className="mb-5">
        <span className="block font-inter font-medium text-base text-title mb-[10px] text-left ">Change Folder Color</span>
        <div>
          <div className="flex justify-between">
            <span onClick={() => setColor("text-blue-400")} className=" w-9 h-9 bg-blue-400  flex justify-center items-center cursor-pointer">
              {color === "text-blue-400" && <img className="" src="/assets/popup/tickMark.svg" alt="" />}
            </span>

            <span onClick={() => setColor("text-[#FFC107]")} className="bg-[#FFC107] w-9 h-9  flex justify-center items-center cursor-pointer">
              {color === "text-[#FFC107]" && <img className="" src="/assets/popup/tickMark.svg" alt="" />}
            </span>

            <span onClick={() => setColor("text-[#9C27B0]")} className="bg-[#9C27B0] w-9 h-9  flex justify-center items-center cursor-pointer">
              {color === "text-[#9C27B0]" && <img className="" src="/assets/popup/tickMark.svg" alt="" />}
            </span>

            <span onClick={() => setColor("text-[#2196F3]")} className="bg-[#2196F3] w-9 h-9  flex justify-center items-center cursor-pointer">
              {color === "text-[#2196F3]" && <img className="" src="/assets/popup/tickMark.svg" alt="" />}
            </span>

            <span onClick={() => setColor("text-[#E91E63]")} className="bg-[#E91E63] w-9 h-9  flex justify-center items-center cursor-pointer">
              {color === "text-[#E91E63]" && <img className="" src="/assets/popup/tickMark.svg" alt="" />}
            </span>

            <span onClick={() => setColor("text-[#3F51B5]")} className="bg-[#3F51B5] w-9 h-9  flex justify-center items-center cursor-pointer">
              {color === "text-[#3F51B5]" && <img className="" src="/assets/popup/tickMark.svg" alt="" />}
            </span>

            <span onClick={() => setColor("text-[#00BCD4]")} className="bg-[#00BCD4] w-9 h-9  flex justify-center items-center cursor-pointer">
              {color === "text-[#00BCD4]" && <img className="" src="/assets/popup/tickMark.svg" alt="" />}
            </span>

            <span onClick={() => setColor("text-[#8BC34A]")} className="bg-[#8BC34A] w-9 h-9  flex justify-center items-center cursor-pointer ">
              {color === "text-[#8BC34A]" && <img className="" src="/assets/popup/tickMark.svg" alt="" />}
            </span>
          </div>
        </div>
      </div>
    </label>
  );
}

export default FolderColor;
