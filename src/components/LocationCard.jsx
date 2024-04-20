const LocationCard = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      {data.dimension !== "" && (
        <p className="dimension">Dimension - {data.dimension}</p>
      )}
      {data.type !== "" && <p className="type">Type - {data.type}</p>}
    </div>
  );
};

export default LocationCard;
