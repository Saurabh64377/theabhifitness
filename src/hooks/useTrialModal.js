import { createContext, useContext } from "react";

export const TrialModalContext = createContext({
  open: () => {},
  close: () => {},
});

export const useTrialModal = () => useContext(TrialModalContext);
