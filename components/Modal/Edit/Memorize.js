import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPlan } from "../../../dataStore/feature/MemorizeSlicer";
import CreateNew from "../PlanPopup/CreateNew";
import DaysNumberInput from "../PlanPopup/DayNumberInput";
import PopupBtn from "../PopupBtn";
import EditPopup from "./EditPopup";
import FolderName from "./FolderName";

function Memorize({ onClose, plan }) {
  const [planName, setPlanName] = useState("");
  const [days, setDays] = useState(0);
  const [error, setError] = React.useState("");
  const dispatch = useDispatch();
  const { plans } = useSelector((state) => state.memorize);

  const handleSubmit = (e) => {
    setError("");
    if (planName || days) {
      dispatch(
        editPlan({
          id: plan.id,
          plan: {
            ...plan,
            name: planName || plan.name,
            days: days || plan.days,
          },
        })
      );
    } else {
      setError("Please select change name or days or click cancel");
    }
  };

  return (
    <EditPopup>
      {/* <FolderName /> */}
      <CreateNew title="New Name" setPlanName={setPlanName} />
      <DaysNumberInput setDays={setDays} />
      {error && <span className="text-red-500 text-sm">{error}</span>}
      <PopupBtn handleSubmit={handleSubmit} onClose={onClose} />
    </EditPopup>
  );
}

export default Memorize;
