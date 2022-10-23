import React from "react";
import { useDispatch } from "react-redux";
import { deleteDua } from "../../../dataStore/feature/MemorizeSlicer";
import DeletePopupBtn from "./DeletePopupBtn";

function DeletePopup({ onClose, dua, planId }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteDua({ duaId: dua.id, planId }));
  };

  return (
    <div onClick={() => onClose()} className="bg-red-100 px-8 py-6  xs:w-8/12">
      <p className="text-start font-inter font-normal text-base leading-6 text-title">Do you want to delete this dua from bookmark folder?</p>
      <DeletePopupBtn handleDelete={handleDelete} />
    </div>
  );
}

export default DeletePopup;
