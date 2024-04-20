// Search.jsx
import React, { useState } from "react";
import axios from "axios";
import SearchSelect from "./SearchSelect";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  const [searchType, setSearchType] = useState("character");
  const [searchTerm, setSearchTerm] = useState("");
  const [responseItems, setResponseItems] = useState([]);

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
      setResponseItems(response.data.results);
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
      <div>
        <h2>Characters</h2>
        <ul>
          {responseItems.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
