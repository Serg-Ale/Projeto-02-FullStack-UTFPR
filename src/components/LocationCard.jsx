const LocationCard = ({ data }) => {
  return (
    <div className="p-3 text-lg">
      <h2 className="text-3xl font-bold">{data.name}</h2>
      {data.dimension !== "" && (
        <p className="dimension">Dimension - {data.dimension}</p>
      )}
      {data.type !== "" && <p className="type">Type - {data.type}</p>}
    </div>
  );
};

export default LocationCard;
