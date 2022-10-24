import React, { useState } from "react";

function CreateNewFolder({ setFolderName, setSelected }) {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const regex = /^[a-zA-Z0-9 ]{3,15}$/;
    if (regex.test(e.target.value)) {
      setFolderName(e.target.value);
      setError(false);
      setSelected && setSelected(null);
    } else {
      setError(true);
      setFolderName(null);
    }
  };

  return (
    <label className="block">
      <p className="text-left font-inter font-medium text-base leading-5 mb-2">Or,</p>
      <div className="mb-5">
        <input
          className="w-full h-12 px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring-  dark:border-none dark:focus:ring-1 dark:focus:ring- dark:placeholder:text-[#dedede]"
          type="text"
          name="folder"
          placeholder="Create New Bookmark Folder"
          onChange={handleChange}
        />
        {error && <span className="text-red-500 text-sm">Please enter a valid folder name</span>}
      </div>
    </label>
  );
}

export default CreateNewFolder;
