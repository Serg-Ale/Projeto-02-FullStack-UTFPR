import React, { createContext, useContext, useState, useMemo } from "react";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchSelect, setSearchSelect] = useState("character");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);

  const setSearchInput = (term) => {
    setSearchInputValue(term);
  };

  return (
    <SearchContext.Provider
      value={{
        searchSelect,
        setSearchSelect,
        searchInputValue,
        setSearchInput,
        responseData,
        setResponseData,
        error,
        setError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
