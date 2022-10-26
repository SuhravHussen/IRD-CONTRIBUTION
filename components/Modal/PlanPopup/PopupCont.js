import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlan } from "../../../dataStore/feature/MemorizeSlicer";
import SelectOption from "../BookmarkPopup/SelectOption";
import PopupBtn from "../PopupBtn";
import CreateNew from "./CreateNew";
import DaysNumberInput from "./DayNumberInput";

function PopupCont({ onClose, dua, type }) {
  const [selected, setSelected] = React.useState(null);
  const [days, setDays] = React.useState(0);
  const [planName, setPlanName] = React.useState("");
  const { plans } = useSelector((state) => state.memorize);

  const [error, setError] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setError("");

    if (selected && selected.id && selected.name && selected.days && dua) {
      dispatch(
        addPlan({
          new: false,
          plan: {
            id: selected.id,
            name: selected.name,
            days: selected.days,
            type: type || "dua",
            dua: [...selected.dua, { ...dua, completed: false }],
          },
        })
      );

      onClose();
    } else if (!selected && planName && days && dua) {
      const deadline = new Date();
      deadline.setDate(deadline.getDate() + Number(days));
      deadline.setHours(0, 0, 0, 0);
      dispatch(
        addPlan({
          new: true,
          plan: {
            name: planName,
            days: deadline,
            type: type || "dua",
            dua: [
              {
                ...dua,
                completed: false,
              },
            ],
          },
        })
      );
      onClose();
    } else {
      setError("Please select a plan or create a new one");
    }
  };

  return (
    <div className="mx-8">
      <SelectOption title="Memorize" plans={plans} selected={selected} setSelected={setSelected} />
      <CreateNew setSelected={setSelected} setPlanName={setPlanName} />
      <DaysNumberInput setSelected={setSelected} setDays={setDays} />
      <PopupBtn handleSubmit={handleSubmit} onClose={onClose} />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

export default PopupCont;
