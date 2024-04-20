import { useState } from "react";
import SearchSelect from "./SearchSelect";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  const [searchType, setSearchType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectChange = (selectedValue) => {
    setSearchType(selectedValue);
    console.log("Selected search type:", selectedValue);
  };

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    console.log("Search term:", term);
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
      <Button variant="outline">Search</Button>
    </div>
  );
};

export default Search;
