import React from "react";
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
    setResponseData,
    error,
    setError,
  } = useSearchContext();

  useDataFetching(searchSelect, searchInputValue, setResponseData, setError);

  const handleInputChange = useInputChange(setSearchInput);

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
    </div>
  );
};

export default Search;
