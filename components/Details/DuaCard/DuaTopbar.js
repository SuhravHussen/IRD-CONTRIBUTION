const DuaTopbar = ({ lang = "en", duaName, duaId }) => {
  const number = lang === "en" ? duaId : duaId.toLocaleString("bn");

  return (
    <div>
      <div className="flex flex-row  justify-start items-center ">
        {/* DuaName */}
        <p className=" font-medium">{`${number}. ${duaName}`}</p>
      </div>
      <div className="w-full h-[1px] mt-5 bg-[#E2E2E2] dark: dark:hidden"></div>
    </div>
  );
};

export default DuaTopbar;
