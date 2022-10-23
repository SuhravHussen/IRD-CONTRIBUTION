import React from "react";

function DaysNumberInput({ setSelected, setDays }) {
  const [error, setError] = React.useState("");

  const handleChange = (e) => {
    if (e.target.value > 0 && e.target.value < 31) {
      setError("");
      setDays(e.target.value);
      setSelected && setSelected(null);
    } else {
      setError("Number of days can't be less than 1 or more than 30");
      setDays(null);
    }
  };

  return (
    <label className="block">
      <div className="mb-5">
        <span className="block font-inter font-medium text-base text-title mb-[10px] text-left ">Plan deadline </span>

        <input
          className="w-full h-[48px] px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- text-sm
           dark:border-none dark:placeholder:text-[#96b2a4]"
          type="text"
          name="plan"
          placeholder="Enter number of days to complete (ex: 3)"
          onChange={handleChange}
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    </label>
  );
}

export default DaysNumberInput;
