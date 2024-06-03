import React from "react";

import { NavLink, useParams } from "react-router-dom";

import styled from "./NavLinks.module.scss";

const NavLinks = () => {
  const id = useParams().userId;

  return (
    <ul className={styled["nav-links"]}>
      <li>
        <NavLink to="/">ALL_USERS</NavLink>
      </li>
      <li>
        <NavLink to={`${id}/places`}>MY_PLACES</NavLink>
      </li>
      <li>
        <NavLink to="places/new">NEW_PLACE</NavLink>
      </li>
      <li>
        <NavLink to="auth">AUTHANTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
