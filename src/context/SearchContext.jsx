import React, { createContext, useContext, useState, useMemo } from "react";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchSelect, setSearchSelect] = useState("character");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const setSearchInput = (term) => {
    setSearchInputValue(term);

    if (!searchHistory.includes(term)) {
      setSearchHistory((prevHistory) => [...prevHistory, term]);
    }
  };

  const memoizedSearchHistory = useMemo(
    () => [...searchHistory],
    [searchHistory]
  );

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
        searchHistory,
        memoizedSearchHistory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
