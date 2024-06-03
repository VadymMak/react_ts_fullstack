import React, { useState } from "react";

import Card from "../../../shared/components/Card/Card";
import styled from "./PlaceItem.module.scss";

import { IPlaceProps } from "../places-list/PlacesList";
import Button from "../../../shared/components/Button/Button";
import Modal from "../../../shared/components/UIElements/modal/Modal";

const PlaceItem: React.FC<IPlaceProps> = ({
  id,
  imageUrl,
  title,
  description,
  address,
  creator,
  location,
}) => {
  const [showMap, setShowMap] = useState<boolean>(false);

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };
  const props = {
    rest: {
      header: address,
      contentClass: "place-item__modal-content",
      footerClass: "place-item__mpdal-actions",
      footer: (
        <Button type="submit" onClick={closeMapHandler}>
          CLOSE
        </Button>
      ),
      children: (
        <div className="map-container">
          <h2>The Map!</h2>
        </div>
      ),
    },
    show: showMap,
    onCancel: closeMapHandler,
  };

  return (
    <>
      <Modal {...props}>{props.rest.children}</Modal>
      <li className={styled["list-item"]}>
        <Card className={styled["place-item__content"]}>
          <>
            <div className={styled["place-item__image"]}>
              <img src={imageUrl} alt={title} />
            </div>
            <div className={styled["place-item__info"]}>
              <h2>{title}</h2>
              <h3>{address}</h3>
              <p>{description}</p>
            </div>
            <div className={styled["place-item__actions"]}>
              <Button type="button" inverse={true} onClick={openMapHandler}>
                VIEW ON MAP
              </Button>
              <Button type="button" to={`places/${id}`} onClick={() => {}}>
                EDIT PLACE
              </Button>
              <Button
                type="button"
                danger
                to={`places/${id}`}
                onClick={() => {}}
              >
                DELETE PLACE
              </Button>
            </div>
          </>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
