import React from "react";

import styled from "./Card.module.scss";

interface ICardProps {
  className?: {};
  children: React.ReactElement;
}

const Card: React.FC<ICardProps> = ({ children }) => {
  return <div className={styled.card}>{children}</div>;
};

export default Card;
