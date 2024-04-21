const CharacterCard = ({ data }) => {
  return (
    <>
      <img src={data.image} alt={data.name} className="rounded-3xl p-1" />
      <div className="p-3 text-center text-xl ">
        <h2 className="text-3xl font-bold group-hover:text-primary">
          {data.name}
        </h2>
        <p className="episodes">Total episodes - {data.episode?.length}</p>
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
    </>
  );
};

export default CharacterCard;
