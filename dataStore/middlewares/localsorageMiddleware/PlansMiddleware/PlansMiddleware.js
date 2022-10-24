import { addPlan, deleteDua, editPlan, updateCompleted } from "../../../feature/MemorizeSlicer";
import { localStorageMiddleware } from "../listner";

localStorageMiddleware.startListening({
  actionCreator: addPlan,
  effect: (action, api) => {
    localStorage.setItem(
      "plans",
      JSON.stringify({
        plans: api.getState().memorize.plans,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: editPlan,
  effect: (action, api) => {
    localStorage.setItem(
      "plans",
      JSON.stringify({
        plans: api.getState().memorize.plans,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: updateCompleted,
  effect: (action, api) => {
    localStorage.setItem(
      "plans",
      JSON.stringify({
        plans: api.getState().memorize.plans,
      })
    );
  },
});

localStorageMiddleware.startListening({
  actionCreator: deleteDua,
  effect: (action, api) => {
    localStorage.setItem(
      "plans",
      JSON.stringify({
        plans: api.getState().memorize.plans,
      })
    );
  },
});

// get plans state from local storage
export const plansState = () => {
  const plans = JSON.parse(localStorage.getItem("plans"));
  if (plans && plans?.plans) {
    return plans;
  } else {
    return null;
  }
};
