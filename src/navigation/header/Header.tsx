import React from "react";

import styled from "./Header.module.scss";

interface IHeaderProps {
  children: JSX.Element | JSX.Element[];
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  return <header className={styled["main-header"]}>{children}</header>;
};

export default Header;
