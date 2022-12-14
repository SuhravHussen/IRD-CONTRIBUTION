import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const loading = useSelector((state) => state.drawer.loading);
  const data = useSelector((state) => state.drawer.data);
  return (
    <div className="bg-red-100  p-7 mb-2 dark:bg-[#223449]">
      <div className="flex mb-[4%]">
        <div className="flex items-center justify-center  bg-[#DDFFEC] h-[81px] w-[81px] xs:h-15 xs:w-15 xs: dark:bg-[#DDFFEC26]">
          {""}
          <img src="/assets/others/thanks.svg" alt="" />
        </div>
        <div className="flex items-center">
          <div className="ml-5">
            <p className="flex font-poppins font-medium text-2xl text-title xs:text-xl ">{"Thanks & Credit"}</p>
            <p className="flex font-poppins font-normal text-sm text-[#484848] mt-[2px] ">You can help us for islamic dawah</p>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        <div className="text-left">
          {loading ? (
            <>loading</>
          ) : (
            data &&
            data.result
              .filter((filterItem) => {
                return filterItem.item_name === "Thanks and Credits";
              })
              .map((item) => (
                <p className="font-inter font-normal text-base text-title leading-6 text-justify mb-2.5 xs:text-[15px] ">{item.item_details}</p>
              ))
          )}

          <p className="font-inter font-semibold text-base  leading-6 text-justify mb-2.5">Those who habe contributed to the project:</p>
          <ul className="mb-2.5 list-disc font-poppins ml-10 xs:text-[15px] ">
            <li>Quran Mazid</li>
            <li>Kutub Sittah and Various Hadith Books</li>
            <li>Rahe Belayet (Dr. Khandakar Abdullah Jahangir)</li>
            <li>Hisnul Muslim (Sayeed Ibn Ali Al Qahtani)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
