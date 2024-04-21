const EpisodeCard = ({ data }) => {
  return (
    <div className="p-3 text-lg text-center">
      <h2 className="text-3xl font-bold group-hover:text-primary ">{data.name}</h2>
      <p className="air-date">Air date - {data.air_date}</p>
      <p className="episode">Episode - {data.episode}</p>
    </div>
  );
};

export default EpisodeCard;
