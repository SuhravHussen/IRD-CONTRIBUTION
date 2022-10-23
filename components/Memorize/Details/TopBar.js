import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCompleted } from "../../../dataStore/feature/MemorizeSlicer";

const TopBar = ({ title, dua, planId }) => {
  const [tick, setTick] = useState("tick");
  const completed = dua.completed;
  const dispatch = useDispatch();

  const handleTick = () => {
    console.log(tick);
    if (tick === "tick") {
      dispatch(
        updateCompleted({
          planId: planId,
          duaId: dua.id,
          completed: true,
        })
      );
    } else {
      dispatch(
        updateCompleted({
          planId: planId,
          duaId: dua.id,
          completed: false,
        })
      );
    }
  };

  useEffect(() => {
    if (completed) {
      setTick("greentick");
    } else {
      setTick("tick");
    }
  }, [completed]);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row  justify-start items-center ">
          {/* DuaName */}
          <p className=" font-inter text-lg">{title}</p>
        </div>
        <img onClick={handleTick} className="stroke-cyan-500" src={`/assets/memorize/${tick}.svg`} alt="" />
      </div>
      <div class="w-full h-[1px] mt-5 bg-[#E2E2E2] dark:hidden"></div>
    </div>
  );
};

export default TopBar;
