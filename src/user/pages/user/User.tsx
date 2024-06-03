import React from "react";
import UsersList, {
  TUsersListProps,
} from "../../components/users-list/UsersList";

const items: TUsersListProps = [
  {
    id: "u1",
    name: "Vadym",
    image:
      "https://images.pexels.com/photos/1792832/pexels-photo-1792832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    placeCount: 1,
  },
  {
    id: "u2",
    name: "Oksana",
    image:
      "https://images.pexels.com/photos/403480/pexels-photo-403480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    placeCount: 2,
  },
  {
    id: "u3",
    name: "Nastya",
    image:
      "https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    placeCount: 3,
  },
];

const User: React.FC = () => {
  return (
    <div>
      {" "}
      <UsersList {...[...items]} />
    </div>
  );
};

export default User;
