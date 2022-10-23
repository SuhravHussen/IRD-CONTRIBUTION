import React, { useState } from "react";

function CreateNew({ setPlanName, setSelected, title = "Or Create New Plan" }) {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const regex = /^[a-zA-Z0-9 ]{3,15}$/;
    if (regex.test(e.target.value)) {
      setPlanName(e.target.value);
      setError(false);
      setSelected && setSelected(null);
    } else {
      setError(true);
      setPlanName(null);
    }
  };

  return (
    <label className="block">
      <div className="mb-5">
        <span className="block font-inter font-medium text-base text-title mb-[10px] text-left ">{title}</span>

        <input
          className="w-full h-[48px] px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- text-sm
           dark:border-none dark:placeholder:text-[#96b2a4]"
          type="text"
          name="plan"
          placeholder="Name of new plan"
          onChange={handleChange}
        />
        {error && <span className="text-red-500 text-sm">Please enter a valid plan name</span>}
      </div>
    </label>
  );
}

export default CreateNew;
