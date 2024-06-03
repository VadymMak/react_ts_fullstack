import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../header/Header";

import styled from "./Navigation.module.scss";
import NavLinks from "../nav-links/NavLinks";
import SideDrawer from "../side-drawer/SideDrawer";
import Backdrop from "../../shared/components/UIElements/Backdrop/Backdrop";
import { useWindowSize } from "../../hooks/useWindowSize";

const Navigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  const openDrawerHandler = useCallback(() => {
    setDrawerIsOpen(true);
  }, []);

  const closeDrawerHandler = useCallback(() => {
    setDrawerIsOpen(false);
  }, []);

  useEffect(() => {
    if (width > 768) {
      setDrawerIsOpen(false);
    }
  }, [width]);

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={styled["main-navigation__drawer-nav"]}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <Header>
        <button
          onClick={openDrawerHandler}
          className={styled["main-navigation__menu-button"]}
        >
          <span />
          <span />
          <span />
        </button>
        <Link to="/">
          <h1 className={styled["main-navigation__title"]}>Your Places</h1>
        </Link>
        <nav className={styled["main-navigation__header-nav"]}>
          <NavLinks />
        </nav>
      </Header>
    </>
  );
};

export default Navigation;
