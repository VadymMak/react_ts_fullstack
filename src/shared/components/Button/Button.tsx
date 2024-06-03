import React from "react";
import { Link } from "react-router-dom";

import styled from "./Button.module.scss";

interface IButtonProps {
  size?: "small" | "big";
  inverse?: boolean;
  danger?: boolean;
  href?: string;
  type: "button" | "reset" | "submit" | undefined;
  onClick: () => void;
  disabled?: boolean;
  to?: string;
  children: string;
}

const Button: React.FC<IButtonProps> = ({
  size,
  inverse,
  danger,
  href,
  to,
  type = "button",
  disabled,
  onClick,
  children,
}) => {
  if (href) {
    return (
      <a
        className={[
          styled["button"],
          styled[`button--${size}||default`],
          inverse && styled[`button--inverse`],
          danger && styled["button--danger"],
        ].join(" ")}
        href={href}
      >
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        to={to}
        className={[
          styled["button"],
          styled[`button--${size}||default`],
          inverse && styled[`button--inverse`],
          danger && styled["button--danger"],
        ].join(" ")}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={[
        styled["button"],
        styled[`button--${size}||default`],
        inverse && styled[`button--inverse`],
        danger && styled["button--danger"],
      ].join(" ")}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
