import React from "react";

const TrapsMiddle = ({ id, fill, stroke, strokeWidth, active, onClick }) => {
  return (
    <g id={id} className={`bodymap ${active}`} onClick={onClick}>
      <path
        d="M390.36,237.49c-18.28,34.34-29.74,61.7-37.49,82.12,0,0,0,.03-.02.04,0,.04-.03.06-.04.1-1.22,3-2.31,5.9-3.25,8.73-.03.04-.04.09-.05.13-1.56,4.29-2.96,8.2-4.22,11.72-6.56,18.38-9.85,27.6-15.04,27.6s-8.48-9.22-15.04-27.6c-1.26-3.52-2.65-7.43-4.22-11.72,0-.04-.03-.09-.05-.13-.95-2.83-2.03-5.73-3.25-8.73,0-.04-.03-.06-.04-.1,0,0,0-.03-.02-.04-7.76-20.42-19.22-47.78-37.5-82.12,2.48,1.17,5.04,1.63,7.88,1.63,3.63,0,7.73-.73,12.72-1.63,8.88-1.59,21.05-3.78,39.5-3.78s30.63,2.19,39.51,3.78c4.99.89,9.09,1.63,12.72,1.63,2.84,0,5.39-.45,7.88-1.63Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
    </g>
  );
};

export default TrapsMiddle;
