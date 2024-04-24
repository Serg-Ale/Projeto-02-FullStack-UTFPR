import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchSelect from "./SearchSelect";
import { Input } from "./ui/input";
import ResponseItems from "./ResponseItems";

const Search = () => {
  const [searchSelect, setSearchSelect] = useState("character");
  const [searchInput, setSearchInput] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/${searchSelect}/?name=${searchInput}`
        );

        // Verifica se a resposta possui resultados
        if (!response.data.results || response.data.results.length === 0) {
          setError(`Not Found ${searchInput} in ${searchSelect}`); // Define a mensagem de erro
          setResponseData([]); // Limpa os dados de resposta
        } else {
          setResponseData(response.data.results);
          setError(null); // Limpa a mensagem de erro
        }
      } catch (error) {
        setError(`Error fetching data for ${searchInput} in ${searchSelect}`); // Define a mensagem de erro em caso de erro na requisição
        setResponseData([]); // Limpa os dados de resposta
      }
    };

    fetchData();
  }, [searchInput, searchSelect]);

  const handleSelectChange = (selectedValue) => {
    setSearchSelect(selectedValue);
  };

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchInput(term);
  };

  return (
    <div className="flex flex-col gap-3 m-auto bg-[#131316] min-w-[360px] w-[90%] md:max-w-[60%] md:min-w-[740px] my-8 p-4 rounded-xl text-neutral-200 ">
      <SearchSelect onSelectChange={handleSelectChange} />

      <Input
        type="text"
        placeholder="Enter a search term"
        className="text-center"
        value={searchInput}
        onChange={handleInputChange}
      />
      {error ? ( // Verifica se há um erro
        <p>{error}</p> // Exibe a mensagem de erro
      ) : (
        <ResponseItems responseData={responseData} searchType={searchSelect} />
      )}
    </div>
  );
};

export default Search;
