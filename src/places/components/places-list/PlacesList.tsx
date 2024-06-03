import React from "react";

import styled from "./PlacesList.module.scss";
import Card from "../../../shared/components/Card/Card";
import PlaceItem from "../place-item/PlaceItem";

export interface IPlaceProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  address: string;
  creator: string;
  location: {
    lat: number;
    lng: number;
  };
}

export type TPlaceProps = IPlaceProps[];

const PlacesList: React.FC<TPlaceProps> = (items) => {
  if (!Object.keys(items).length) {
    return (
      <div className={[styled["place-list"], styled.center].join(" ")}>
        <Card>
          <>
            <h2>No Places found</h2>
            <button>Share it</button>
          </>
        </Card>
      </div>
    );
  }

  return (
    <ul className={styled["place-list"]}>
      {Object.values(items).map((place: IPlaceProps) => (
        <PlaceItem key={place.id} {...place} />
      ))}
    </ul>
  );
};

export default PlacesList;
