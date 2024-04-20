const EpisodeCard = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p className="air-date">Air date - {data.air_date}</p>
      <p className="episode">Episode - {data.episode}</p>
    </div>
  );
};

export default EpisodeCard;
