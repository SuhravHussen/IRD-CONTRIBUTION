import React from "react";

import DeletePopupBtn from "./DeletePopupBtn";

function DeletePopup({ onClose, title, onClick }) {
  return (
    <div onClick={() => onClose()} className="bg-red-100 px-8 py-6  xs:w-8/12">
      <p className="text-start font-inter font-normal text-base leading-6 text-title">{title}</p>
      <DeletePopupBtn onClose={onClose} handleDelete={onClick} />
    </div>
  );
}

export default DeletePopup;
