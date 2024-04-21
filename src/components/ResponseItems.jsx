import React from "react";
import CharacterCard from "./CharacterCard";
import EpisodeCard from "./EpisodeCard";
import LocationCard from "./LocationCard";

const ResponseItems = ({ responseData, searchType }) => {
  const renderCard = (data) => {
    switch (searchType) {
      case "character":
        return <CharacterCard key={data.id} data={data} />;
      case "episode":
        return <EpisodeCard key={data.id} data={data} />;
      case "location":
        return <LocationCard key={data.id} data={data} />;
    }
  };

  return (
    <div className="flex flex-col gap-4  bg-[#131316] rounded-3xl">
      {responseData.map((data) => renderCard(data))}
    </div>
  );
};

export default ResponseItems;
