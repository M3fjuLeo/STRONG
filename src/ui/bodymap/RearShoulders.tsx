import React from "react";
import { BodymapMuscleProps } from "../Bodymap";

const RearShoulders = ({
  id,
  fill,
  stroke,
  strokeWidth,
  active,
  onClick,
}: BodymapMuscleProps) => {
  return (
    <g id={id} className={`bodymap ${active}`} onClick={onClick}>
      <path
        d="M511.59,288.79c-3.24-2.06-8.25-4.62-13.43-4.9-.56-.04-1.2-.06-1.91-.09-6.97-.31-21.03-.93-34.55-7.07-4.38-1.99-8.7-4.55-12.71-7.89-6.97-5.78-13.74-10.96-20.27-15.97-10.06-7.72-19.59-15.02-28.81-23.66,6.14-6.45,17.33-16.23,36.59-15.6h.02c.17,0,16.25,1.4,33.54,11.85,15.31,9.27,34.65,27.7,41.54,63.32Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M260.61,229.21c-9.23,8.65-18.75,15.95-28.81,23.66-6.54,5.01-13.29,10.19-20.27,15.97-4,3.33-8.34,5.89-12.71,7.89-13.52,6.15-27.58,6.76-34.55,7.07-.71.03-1.35.05-1.92.09-5.18.27-10.19,2.84-13.43,4.9,6.9-35.62,26.23-54.06,41.55-63.33,17.29-10.46,33.37-11.85,33.53-11.85h.02c19.28-.62,30.45,9.14,36.6,15.6Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
    </g>
  );
};

export default RearShoulders;
