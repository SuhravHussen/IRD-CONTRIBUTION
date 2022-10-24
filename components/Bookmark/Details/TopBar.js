const SingleTopBar = ({ title }) => {
  return (
    <div>
      <div className="flex flex-row  justify-start items-center">
        {/* DuaName */}
        <p className=" font-inter font-medium text-lg">{title}</p>
      </div>
      <div class="w-full h-[1px] mt-5 bg-[#E2E2E2] dark:"></div>
    </div>
  );
};

export default SingleTopBar;
