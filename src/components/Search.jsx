// Search.jsx
import React, { useEffect } from "react";
import axios from "axios";
import SearchSelect from "./SearchSelect";
import { Input } from "./ui/input";
import ResponseItems from "./ResponseItems";

import { useSearchContext } from "@/context/SearchContext";

const Search = () => {
  const {
    searchSelect,
    searchInput,
    setSearchInput,
    responseData,
    setResponseData,
    error,
    setError,
  } = useSearchContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/${searchSelect}/?name=${searchInput}`
        );

        if (!response.data.results || response.data.results.length === 0) {
          setError(`Not Found ${searchInput} in ${searchSelect}`);
          setResponseData([]);
        } else {
          setResponseData(response.data.results);
          setError(null);
        }
      } catch (error) {
        setError(`Error fetching data for ${searchInput} in ${searchSelect}`);
        setResponseData([]);
      }
    };

    fetchData();
  }, [searchInput, searchSelect]);


  return (
    <div className="flex flex-col gap-3 m-auto bg-[#131316] min-w-[360px] w-[90%] md:max-w-[60%] md:min-w-[740px] my-8 p-4 rounded-xl text-neutral-200 ">
      <SearchSelect />

      <Input
        type="text"
        placeholder="Enter a search term"
        className="text-center"
        value={searchInput}
      />
      {error ? (
        <p>{error}</p>
      ) : (
        <ResponseItems responseData={responseData} searchType={searchSelect} />
      )}
    </div>
  );
};

export default Search;
