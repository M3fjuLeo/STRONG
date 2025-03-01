import React from "react";

const Obliques = ({ id, fill, stroke, strokeWidth, active, onClick }) => {
  return (
    <g id={id} className={`bodymap ${active}`} onClick={onClick}>
      <path
        d="M272.8,406.06c-2.74,15.58-5.85,33.23-3.49,49.66,4.83,33.57-6.55,48.85-11.65,53.86-6.22,6.09-16.8,8.99-26.23,7.31,1.27-10.42,2.32-20.17,2.91-27.28.42-5.01,1.09-10.04,1.79-15.35,2.58-19.47,5.24-39.6-4.39-59.14-19.23-37.82-24.33-61.62-25.32-67.11,1.13-3.44,1.99-6.98,2.58-10.55.92-5.82,3.02-19.11-1.38-29.2,2.28,2.19,4.33,4.6,6.29,7.03,1.18,1.46,2.4,2.87,3.68,4.21,10.16,11.56,22.09,22.06,32.62,31.32,13.18,11.59,24.56,21.61,25.39,27.78,0,.05.02.11.02.16.08.83.15,1.69.2,2.58,0,.06,0,.12,0,.19.18,6.35-1.32,14.88-3.02,24.53Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M426.13,489.61c.6,7.11,1.65,16.86,2.91,27.28-9.43,1.68-20.01-1.22-26.23-7.31-5.11-5.01-16.47-20.29-11.65-53.86,2.36-16.44-.74-34.09-3.49-49.66-1.7-9.65-3.2-18.18-3.02-24.53,0-.07,0-.13,0-.19.05-.89.12-1.75.2-2.58,0-.05,0-.11.02-.16.84-6.17,12.22-16.19,25.39-27.78,10.5-9.23,22.37-19.69,32.5-31.19,1.33-1.39,2.59-2.83,3.81-4.34,1.96-2.42,4-4.83,6.27-7.02-4.4,10.09-2.29,23.37-1.36,29.19.57,3.57,1.44,7.12,2.58,10.57-1,5.53-6.13,29.33-25.33,67.12-9.62,19.52-6.96,39.65-4.38,59.11.7,5.32,1.37,10.34,1.79,15.35Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
    </g>
  );
};

export default Obliques;
