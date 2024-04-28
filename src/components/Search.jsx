import React, { useEffect } from "react";
import axios from "axios";
import SearchSelect from "./SearchSelect";
import { Input } from "./ui/input";
import ResponseItems from "./ResponseItems";

import { useSearchContext } from "@/context/SearchContext";

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

  useEffect(() => {
    const fetchData = async () => {
      if (!searchInputValue) {
        setResponseData([]);
        setError(null);
        return;
      }

      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/${searchSelect}/?name=${searchInputValue}`
        );

        if (!response.data.results || response.data.results.length === 0) {
          setError(`Not Found ${searchInputValue} in ${searchSelect}`);
          setResponseData([]);
        } else {
          setResponseData(response.data.results);
          setError(null);
        }
      } catch (error) {
        setError(
          `Error fetching data for ${searchInputValue} in ${searchSelect}`
        );
        setResponseData([]);
      }
    };

    fetchData();
  }, [searchInputValue, searchSelect]);

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchInput(term);
  };

  const clearSearchHistory = () => {
    setSearchInput("");
  };

  return (
    <div className="flex flex-col gap-3 m-auto bg-[#131316] min-w-[360px] w-[90%] md:max-w-[60%] md:min-w-[740px] my-8 p-4 rounded-xl text-neutral-200 ">
      <SearchSelect />

      <Input
        type="text"
        placeholder="Enter a search term"
        className="text-center"
        onChange={handleInputChange}
        value={searchInputValue}
      />
      {error ? <p>{error}</p> : <ResponseItems />}
      <p>Search History:</p>
      <ul>
        {memoizedSearchHistory.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
      <button onClick={clearSearchHistory}>Clear Search History</button>
    </div>
  );
};

export default Search;
