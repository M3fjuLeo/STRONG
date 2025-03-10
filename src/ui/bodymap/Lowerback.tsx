import React from "react";

const Lowerback = ({ id, fill, stroke, strokeWidth, active, onClick }) => {
  return (
    <g id={id} className={`bodymap ${active}`} onClick={onClick}>
      <path
        d="M384.18,506.32c-12-2.59-27.49-2.09-39.07,6.44-7.44,5.48-12.42,13.54-14.86,24.07-2.44-10.53-7.42-18.59-14.86-24.07-11.58-8.53-27.07-9.03-39.06-6.44,6.12-7.5,5.66-18.21,5.19-29.38-.5-11.94-1.08-25.48,5.64-38.17,20.65-38.94,30.2-62.3,28.8-86.04,4.76,12.64,8.11,18.59,14.12,18.69.05,0,.12,0,.18,0s.12,0,.19,0c6.01-.11,9.36-6.07,14.13-18.71-1.42,23.73,8.13,47.1,28.78,86.06,6.73,12.68,6.15,26.23,5.65,38.17-.47,11.17-.93,21.88,5.19,29.38Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
    </g>
  );
};

export default Lowerback;
