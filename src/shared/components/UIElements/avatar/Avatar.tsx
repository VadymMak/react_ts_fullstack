import React from "react";

import styled from "./Avatar.module.scss";

interface IAvatarProps {
  image: string;
  alt: string;
  width: number;
  height: number;
  style?: {};
  className?: string;
}

const Avatar: React.FC<IAvatarProps> = ({
  image,
  alt,
  width,
  height,
  className,
  style,
}) => {
  return (
    <div className={styled["avatar"]}>
      <img src={image} alt={alt} style={{ width: width, height: height }} />
    </div>
  );
};

export default Avatar;
