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
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/${searchType}/?name=${searchTerm}`
        );

        // Verifica se a resposta possui resultados
        if (!response.data.results || response.data.results.length === 0) {
          setError(`Not Found ${searchTerm} in ${searchType}`); // Define a mensagem de erro
          setResponseData([]); // Limpa os dados de resposta
        } else {
          setResponseData(response.data.results);
          setError(null); // Limpa a mensagem de erro
        }
      } catch (error) {
        setError(`Error fetching data for ${searchTerm} in ${searchType}`); // Define a mensagem de erro em caso de erro na requisição
        setResponseData([]); // Limpa os dados de resposta
      }
    };

    fetchData();
  }, [searchTerm, searchType]);

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
      {error ? ( // Verifica se há um erro
        <p>{error}</p> // Exibe a mensagem de erro
      ) : (
        <ResponseItems responseData={responseData} searchType={searchType} />
      )}
    </div>
  );
};

export default Search;
