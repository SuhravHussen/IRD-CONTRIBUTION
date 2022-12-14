import Link from "next/link";
import Memorize from "../Modal/Edit/Memorize";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

import { useCountDown } from "../../helpers/useDateCountdown";

const Card = ({ details }) => {
  const [modalShow, setModalShow] = useState(false);
  const deadline = new Date(details.days) ?? new Date();
  const [days, hours, minutes, seconds] = useCountDown(deadline);

  const { theme } = useTheme();
  const completed = details.dua.filter((item) => item.completed === true).length || 0;
  const percentage = Math.round((completed / details.dua.length || 0) * 100);

  return (
    <div className="bg-red-100 w-full max-h-max  p-5 border-[.5px] border-solid border-devider dark:bg-[#223449] dark:border-none animate-fade-in-up">
      <div className=" flex justify-between items-center">
        <Link href={`/memorize/details/${details.id}`}>
          <p className="cursor-pointer font-inter text-left font-semibold text-md text-[#373737] sm:text-base ">{details.name}</p>
        </Link>
        <button
          onClick={() => setModalShow(true)}
          type="button"
          className="text-black font-medium  leading-tight uppercase  transition duration-150 ease-in-out   text-lg">
          {theme === "dark" ? <img src="/assets/others/dark/threeDot.svg" alt="" /> : <img src="/assets/others/threeDot.svg" alt="" />}
        </button>
      </div>
      <Link href={`/memorize/details/${details.id}`}>
        <div className="cursor-pointer">
          <div>
            <p
              className="flex text-title opacity-80 font-inter font-normal text-sm
               xs:text-sm 
               xs:leading-6 
               sm:text-sm
               lg:text-base mt-3  
               ">
              Total Selected Duas: {details.dua.length}
            </p>
            <p
              className="flex text-title opacity-80 font-inter font-normal text-sm
              xs:text-sm
              xs:leading-6 
              sm:text-sm
              lg:text-base
              
              ">
              Days Remaining: {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
            </p>
            <p
              className="flex text-title opacity-80 font-inter font-normal text-sm
              xs:text-sm 
              xs:leading-6 
              sm:text-sm
              lg:text-base mb-4
              ">
              Completed Dua: {completed}
            </p>
          </div>

          <div className="w-full bg-devider  h-2.5 mb-1.5">
            <div className="h-2.5 bg-lime-400" style={{ width: `${percentage}%` }}></div>
          </div>

          <p className="ml-2 text-title opacity-80 font-inter font-normal text-xs flex justify-end ">{percentage}% Completed</p>
        </div>
      </Link>
      <Rodal
        showCloseButton={false}
        width={500}
        height={500}
        customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
        visible={modalShow}
        onClose={() => setModalShow(false)}>
        <Memorize plan={details} onClose={() => setModalShow(false)} />
      </Rodal>
    </div>
  );
};

export default Card;
