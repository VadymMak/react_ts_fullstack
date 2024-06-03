import React from "react";
import ReactDOM from "react-dom";

import styled from "./Backdrop.module.scss";

interface IBackDropProps {
  onClick: () => void;
}

const Backdrop: React.FC<IBackDropProps> = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className={styled.backdrop} onClick={onClick}></div>,
    document.getElementById("backdrop-hook")!
  );
};

export default Backdrop;
