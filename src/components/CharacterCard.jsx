const CharacterCard = ({ data }) => {
  return (
    <div className="flex flex-col border-2 rounded-3xl border-white hover:border-primary">
      <img src={data.image} alt={data.name} className="rounded-3xl p-1" />
      <div className="p-3 text-center text-xl">
        <h2 className="text-3xl font-bold">{data.name}</h2>
        <p className="episodes">Total episodes - {data.episode.length}</p>
        <p
          className={
            data.status === "Dead"
              ? "text-red-600"
              : data.status == "Alive"
              ? "text-primary"
              : "text-yellow-400"
          }
        >
          Status - {data.status}
        </p>
        <p className="species">Species - {data.species}</p>
        {data.type !== "" && <p className="type">Type - {data.type}</p>}
      </div>
    </div>
  );
};

export default CharacterCard;
