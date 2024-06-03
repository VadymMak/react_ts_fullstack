import React from "react";
import { Link } from "react-router-dom";

import styled from "./UserItem.module.scss";

import { IUserProps } from "../users-list/UsersList";

import Avatar from "../../../shared/components/UIElements/avatar/Avatar";
import Card from "../../../shared/components/Card/Card";

const UserItem: React.FC<IUserProps> = ({ id, name, image, placeCount }) => {
  return (
    <li className={styled["user-item"]}>
      <Card>
        <Link to={`/${id}/places`}>
          <div className={"user-item__image"}>
            <Avatar
              image={image}
              alt={name}
              width={100}
              height={100}
              style={{}}
              className={"string"}
            />
          </div>
          <div className={styled["user-item__info"]}>
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
