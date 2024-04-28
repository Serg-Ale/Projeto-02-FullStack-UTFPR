import React, { useState } from "react";
import SearchSelect from "./SearchSelect";
import { Input } from "./ui/input";
import ResponseItems from "./ResponseItems";
import { useSearchContext } from "@/context/SearchContext";
import { useDataFetching } from "@/hooks/useDataFetching";
import { useInputChange } from "@/hooks/useInputChange";

const Search = () => {
  const {
    searchSelect,
    searchInputValue,
    setSearchInput,
    memoizedSearchHistory,
    setResponseData,
    error,
    setError,
  } = useSearchContext();

  const [showSearchHistory, setShowSearchHistory] = useState(true);

  useDataFetching(searchSelect, searchInputValue, setResponseData, setError);

  const handleInputChange = useInputChange(setSearchInput);

  const clearSearchHistory = () => {
    setSearchInput("");
    setShowSearchHistory(false); // Hide search history when cleared
  };

  const onNewSearch = () => {
    setShowSearchHistory(true); // Show search history for new searches
  };

  return (
    <div className="flex flex-col gap-3 m-auto bg-[#131316] min-w-[360px] w-[90%] md:max-w-[60%] md:min-w-[740px] my-8 p-4 rounded-xl text-neutral-200 ">
      <SearchSelect />

      <Input
        type="text"
        placeholder="Enter a search term"
        className="text-center"
        onChange={(event) => {
          handleInputChange(event);
          onNewSearch(); // Show search history for new searches
        }}
        value={searchInputValue}
      />
      {error ? <p>{error}</p> : <ResponseItems />}
      {showSearchHistory && (
        <>
          <p>Search History:</p>
          <ul>
            {memoizedSearchHistory.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
          <button onClick={clearSearchHistory}>Clear Search History</button>
        </>
      )}
    </div>
  );
};

export default Search;
