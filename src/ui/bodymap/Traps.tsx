import React from "react";

const Traps = ({ id, fill, stroke, strokeWidth, active, onClick }) => {
  return (
    <g id={id} className={`bodymap ${active}`} onClick={onClick}>
      <path
        d="M287.92,178.7v20.85c0,10-5.2,13.67-16.13,17.47-3.35-1.33-19.62-7.35-37.88-7.02.31-.25.64-.52,1.01-.81,3.15-2.52,7.46-5.96,10.44-7.35,1.96-.92,6.52-2.88,11.35-4.94,7.4-3.17,15.8-6.78,18.88-8.35,3.68-1.87,9.2-6.86,12.32-9.84Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M426.68,210c-18.26-.34-34.53,5.69-37.89,7.02-10.92-3.79-16.12-7.47-16.12-17.47v-20.84c3.12,2.97,8.63,7.96,12.31,9.83,3.08,1.57,11.48,5.18,18.88,8.35,4.83,2.06,9.39,4.02,11.35,4.94,2.98,1.39,7.29,4.83,10.44,7.35.37.3.71.57,1.02.81Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
    </g>
  );
};

export default Traps;
