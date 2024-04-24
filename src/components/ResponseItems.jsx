import React from "react";

import CharacterCard from "./CharacterCard";
import EpisodeCard from "./EpisodeCard";
import LocationCard from "./LocationCard";
import CardContainer from "./CardContainer";

import { useSearchContext } from "@/context/SearchContext";

const ResponseItems = () => {
  const { responseData, searchSelect } = useSearchContext();

  const renderCard = (data) => {
    switch (searchSelect) {
      case "character":
        return (
          <CardContainer key={data.id}>
            <CharacterCard data={data} />
          </CardContainer>
        );
      case "episode":
        return (
          <CardContainer key={data.id}>
            <EpisodeCard key={data.id} data={data} />
          </CardContainer>
        );
      case "location":
        return (
          <CardContainer key={data.id}>
            <LocationCard key={data.id} data={data} />
          </CardContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-4 bg-[#131316] rounded-3xl">
      {responseData.map((data) => renderCard(data))}
    </div>
  );
};

export default ResponseItems;
