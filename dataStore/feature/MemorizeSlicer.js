import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  plans: [],
};

export const memorizeSlicer = createSlice({
  name: "memorizeController",
  initialState,
  reducers: {
    addPlan: (state, action) => {
      if (action.payload.new) {
        const isAlreadyAvailable = state.plans.find((plan) => plan.id === action.payload.plan.id);
        !isAlreadyAvailable &&
          state.plans.push({
            ...action.payload.plan,
            id: uid(),
          });
      } else {
        const previousPlanIndex = state.plans.findIndex((plan) => plan.id === action.payload.plan.id);

        state.plans[previousPlanIndex] = action.payload.plan;
      }
    },

    updateFromLocalStorage: (state, action) => {
      state.plans = action.payload.forLocalStorage;
    },

    editPlan: (state, action) => {
      const previousPlanIndex = state.plans.findIndex((plan) => plan.id === action.payload.id);
      state.plans[previousPlanIndex] = action.payload.plan;
    },

    updateCompleted: (state, action) => {
      const previousPlanIndex = state.plans.findIndex((plan) => plan.id === action.payload.planId);
      const previousDuaIndex = state.plans[previousPlanIndex].dua.findIndex((dua) => dua.id === action.payload.duaId);
      state.plans[previousPlanIndex].dua[previousDuaIndex].completed = action.payload.completed;
    },

    deleteDua: (state, action) => {
      const previousPlanIndex = state.plans.findIndex((plan) => plan.id === action.payload.planId);
      const previousDuaIndex = state.plans[previousPlanIndex].dua.findIndex((dua) => dua.id === action.payload.duaId);
      state.plans[previousPlanIndex].dua.splice(previousDuaIndex, 1);
    },
  },
});

export const { addPlan, updateFromLocalStorage, editPlan, updateCompleted, deleteDua } = memorizeSlicer.actions;

export default memorizeSlicer.reducer;

// generate id
const uid = () => String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
