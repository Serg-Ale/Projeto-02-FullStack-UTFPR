import CharacterCard from "./CharacterCard";

const ResponseItems = ({ responseData, searchType }) => {
  return (
    <>
      {responseData.map((data) => (
        <CharacterCard key={data.id} data={data} />
      ))}
    </>
  );
};

export default ResponseItems;
