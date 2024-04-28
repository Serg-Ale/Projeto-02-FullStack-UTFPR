import { useCallback } from "react";

export const useInputChange = (setSearchInput) => {
  const handleInputChange = useCallback(
    (event) => {
      const term = event.target.value;
      setSearchInput(term);
    },
    [setSearchInput]
  );

  return handleInputChange;
};
