import React from "react";

import styled from "./Map.module.scss";

interface IMapProps {
  className: string;
}

const Map: React.FC<IMapProps> = ({ className }) => {
  return <div className={[styled.map, className].join(" ")}>Map</div>;
};

export default Map;
