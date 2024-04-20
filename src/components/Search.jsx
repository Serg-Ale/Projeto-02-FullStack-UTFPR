import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchSelect from "./SearchSelect";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ResponseItems from "./ResponseItems";

const Search = () => {
  const [searchType, setSearchType] = useState("character");
  const [searchTerm, setSearchTerm] = useState("");
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    // Define uma função assíncrona para buscar os dados quando searchTerm ou searchType mudarem
    const fetchData = async () => {
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

    // Chama a função fetchData quando searchTerm ou searchType mudarem
    fetchData();
  }, [searchTerm, searchType]); // Array de dependências para o useEffect

  const handleSelectChange = (selectedValue) => {
    setSearchType(selectedValue);
  };

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
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
      <ResponseItems responseData={responseData} searchType={searchType} />
    </div>
  );
};

export default Search;
