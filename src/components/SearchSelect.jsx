import { useSearchContext } from "@/context/SearchContext";

const SearchSelect = ({ onSelectChange }) => {
  const { setSearchSelect } = useSearchContext();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSearchSelect(selectedValue);
  };

  return (
    <select
      id="searchType"
      className="flex h-10 w-full rounded-md text-center text-base border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      onChange={handleSelectChange}
    >
      <option value="character">Character</option>
      <option value="location">Location</option>
      <option value="episode">Episode</option>
    </select>
  );
};

export default SearchSelect;
