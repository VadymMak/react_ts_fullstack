import React from "react";

import UserItem from "../user-item/UserItem";
import Card from "../../../shared/components/Card/Card";

import styled from "./UsersList.module.scss";

export interface IUserProps {
  id: string;
  name: string;
  image: string;
  placeCount: number;
}

export type TUsersListProps = IUserProps[];

const UsersList: React.FC<TUsersListProps> = (items) => {
  if (Object.keys(items).length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className={styled["users-list"]}>
      {Object.values(items).map((user: IUserProps) => (
        <UserItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UsersList;
