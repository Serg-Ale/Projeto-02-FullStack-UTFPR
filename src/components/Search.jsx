// Search.jsx
import React, { useState } from "react";
import axios from "axios";
import SearchSelect from "./SearchSelect";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ResponseItems from "./ResponseItems";

const Search = () => {
  const [searchType, setSearchType] = useState("character");
  const [searchTerm, setSearchTerm] = useState("");
  const [responseData, setResponseData] = useState([]);

  const handleSelectChange = (selectedValue) => {
    setSearchType(selectedValue);
    console.log("Selected search type:", selectedValue);
  };

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    console.log("Search term:", term);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/${searchType}/?name=${searchTerm}`
      );
      console.log(response.data.results);
      setResponseData(response.data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 m-auto bg-neutral-800 w-[90%] mt-8 p-4 rounded-xl">
      <SearchSelect onSelectChange={handleSelectChange} />
      <Input
        type="text"
        placeholder="Enter a search term"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Button variant="outline" onClick={handleSearch}>
        Search
      </Button>

      <ResponseItems responseData={responseData} searchTyp={searchType} />
    </div>
  );
};

export default Search;
