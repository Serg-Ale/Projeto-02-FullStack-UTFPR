import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchSelect, setSearchSelect] = useState("character");
  const [searchInput, setSearchInput] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);

  return (
    <SearchContext.Provider
      value={{
        searchSelect,
        setSearchSelect,
        searchInput,
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
