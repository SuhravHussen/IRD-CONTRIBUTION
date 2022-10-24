import React from "react";

function FolderColor({ setColor, color }) {
  return (
    <label className="block">
      <div className="mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FFC107]">
          <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
        </svg>

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
