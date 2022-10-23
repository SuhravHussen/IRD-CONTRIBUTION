import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plans: [],
};

export const memorizeSlicer = createSlice({
  name: "memorizeController",
  initialState,
  reducers: {
    addPlan: (state, action) => {
      if (action.payload.new) {
        state.plans.push({
          ...action.payload.plan,
          id: uid(),
        });
      } else {
        const previousPlanIndex = state.plans.findIndex((plan) => plan.id === action.payload.id);
        state.plans[previousPlanIndex] = action.payload.plan;
      }
    },
  },
});

export const { addPlan } = memorizeSlicer.actions;

export default memorizeSlicer.reducer;

// generate id
const uid = () => String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
