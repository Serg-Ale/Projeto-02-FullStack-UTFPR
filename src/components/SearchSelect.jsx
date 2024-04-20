const SearchSelect = ({ onSelectChange }) => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onSelectChange(selectedValue);
  };

  return (
    <select
      id="searchType"
      className="p-3 rounded-md text-sm"
      onChange={handleSelectChange}
    >
      <option value="character">Character</option>
      <option value="location">Location</option>
      <option value="episode">Episode</option>
    </select>
  );
};

export default SearchSelect;
