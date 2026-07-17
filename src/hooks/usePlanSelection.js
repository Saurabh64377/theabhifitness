import { createContext, useContext } from "react";

export const PlanSelectionContext = createContext({
  selectedPlan: "",
  selectPlan: () => {},
});

export const usePlanSelection = () => useContext(PlanSelectionContext);
