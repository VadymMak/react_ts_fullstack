import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "../Backdrop/Backdrop";

import styled from "./Modal.module.scss";

interface IModalOverlayProps {
  className?: string;
  headerClass?: string;
  footerClass?: string;
  contentClass?: string;
  header?: string;
  onSubmit?: () => void;
  children?: React.ReactElement;
  footer?: React.ReactElement;
}

interface IModalProps {
  show: boolean;
  onCancel: () => void;
  rest: IModalOverlayProps;
  children: React.ReactElement;
}

const ModalOverlay: React.FC<IModalOverlayProps> = (props) => {
  const {
    className,
    headerClass,
    contentClass,
    footerClass,
    header,
    children,
    onSubmit,
    footer,
  } = props;

  const content = (
    <div className={[styled.modal, `${className}`].join(" ")}>
      <header className={[styled["modal__header"], `${headerClass}`].join(" ")}>
        <h2>{header}</h2>
      </header>
      <form
        onSubmit={
          onSubmit
            ? onSubmit
            : (event: React.FormEvent) => event.preventDefault()
        }
      >
        <div
          className={[styled["modal__content"], `${contentClass}`].join(" ")}
        >
          {children}
        </div>
        <footer
          className={[styled["modal__footer"], `${footerClass}`].join(" ")}
        >
          {footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook")!);
};

const Modal: React.FC<IModalProps> = (props) => {
  const { show, onCancel, rest } = props;
  return (
    <>
      {show && <Backdrop onClick={onCancel} />}{" "}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={styled.modal}
      >
        <ModalOverlay {...rest} />
      </CSSTransition>
    </>
  );
};

export default Modal;
