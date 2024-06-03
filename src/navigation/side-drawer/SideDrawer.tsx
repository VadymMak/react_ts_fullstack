import React from "react";
import ReactDOM from "react-dom";

import { CSSTransition } from "react-transition-group";

import styled from "./SideDrawer.module.scss";

interface ISideDrawerProps {
  show: boolean;
  onClick: () => void;
  children: JSX.Element;
}

const SideDrawer: React.FC<ISideDrawerProps> = ({
  children,
  show,
  onClick,
}) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames={styled["slide-in-left"]}
      mountOnEnter
      unmountOnExit
    >
      <aside onClick={onClick} className={styled["side-drawer"]}>
        {children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook")! //!-mark mean not null check(for ts)
  );
};

export default SideDrawer;
