const CharacterCard = ({ data }) => {
  return (
    <div key={data.id}>
      <img src={data.image} className="item-image" alt={data.name} />
      <p className="episodes">Total episodes - {data.episode.length}</p>
      <p className={data.status === "Dead" ? "status dead" : "status"}>
        Status - {data.status}
      </p>
      <p className="species">Species - {data.species}</p>
      {data.type !== "" && <p className="type">Type - {data.type}</p>}
    </div>
  );
};

export default CharacterCard;
