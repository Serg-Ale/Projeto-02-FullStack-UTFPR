import { useEffect } from "react";
import axios from "axios";

export const useDataFetching = (
  searchSelect,
  searchInputValue,
  setResponseData,
  setError
) => {
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
  }, [searchInputValue, searchSelect, setResponseData, setError]);
};
