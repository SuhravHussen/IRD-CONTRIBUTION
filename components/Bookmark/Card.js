import Link from "next/link";
import Bookmark from "../Modal/Edit/Bookmark/Bookmark";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const Card = ({ bookmark }) => {
  const [modalShow, setModalShow] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <div className="bg-red-100 w-full h-[6.625rem]  p-3 border-[.5px] border-solid border-devider px-5 dark:bg-[#223449] dark:border-none animate-fade-in-up cursor-pointer flex items-center justify-between">
        <div className="w-1/6 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-8 h-8 ${bookmark?.color}`}>
            <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
          </svg>
        </div>

        <div className="flex justify-between items-center  w-4/6">
          <Link href={`/bookmark/list/${bookmark?.id}`}>
            <div className="flex cursor-pointer justify-between items-start flex-col gap-2">
              <p
                className="font-inter text-left font-semibold text-lg text-[#373737]  xs:text-base 
              sm:text-base m-0 p-0">
                {bookmark?.name}
              </p>
              <p
                className="flex text-title opacity-80 font-inter font-normal text-sm lg:text-base  cursor-pointer 
            sm:text-xs m-0 p-0">
                {" "}
                Total Duas: {bookmark?.duas?.length}
              </p>
            </div>
          </Link>
        </div>

        <div className="w-1/6">
          <div className="flex justify-start items-center">
            {theme === "dark" ? (
              <img className="mr-4" src="/assets/others/dark/maximizeLogo.svg" alt="" />
            ) : (
              <img className="mr-4" src="/assets/others/maximizeLogo.svg" alt="" />
            )}

            <button
              onClick={() => setModalShow(true)}
              type="button"
              className="text-black font-medium  leading-tight uppercase  transition duration-150 ease-in-out   text-lg">
              {theme === "dark" ? <img src="/assets/others/dark/threeDot.svg" alt="" /> : <img src="/assets/others/threeDot.svg" alt="" />}
            </button>
          </div>
        </div>
      </div>

      <Rodal
        showCloseButton={false}
        width={500}
        height={500}
        customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
        visible={modalShow}
        onClose={() => setModalShow(false)}>
        <Bookmark bookmark={bookmark} onClose={() => setModalShow(false)} />
      </Rodal>
    </>
  );
};

export default Card;
