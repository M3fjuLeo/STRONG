import React from "react";

const Chest = ({ id, fill, stroke, strokeWidth, active, onClick }) => {
  return (
    <g id={id} className={`bodymap ${active}`} onClick={onClick}>
      <path
        d="M473.89,295.55c-14.9.39-23.27,9.22-29.96,17.52-.93,1.15-1.89,2.26-2.88,3.34-.09.06-.16.13-.23.22-.15.17-.28.32-.44.49-18.16,19.25-45.55,26.23-69.71,17.75-1.63-.69-3.27-1.34-4.89-1.95-9.36-4.2-17.52-10.41-24.23-18.47-6.08-7.31-9.44-16.78-9.44-26.7v-49.81c0-.72.19-17.59,26.62-20.16,15.4-1.49,24.1,1.14,28.77,2.55.26.08.5.16.74.22.04.02.09.04.12.04,0,0,.03,0,.03,0h.02c.05.02.1.04.15.05.17.06.36.12.54.17,2.64.92,11.16,4,18.08,8.5,10.48,6.8,14.75,12.59,21.23,21.35,2.99,4.06,6.39,8.65,11.08,14.28,4.95,5.94,15.25,18.28,28.44,27.42,1.61,1.12,3.6,2.19,5.96,3.18Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M328.4,237.95v49.79c0,9.9-3.35,19.39-9.44,26.7-6.71,8.06-14.87,14.27-24.23,18.47-1.62.61-3.25,1.26-4.87,1.94-24.1,8.48-51.46,1.55-69.61-17.62-.19-.2-.37-.41-.55-.61-.08-.09-.15-.16-.24-.22-.98-1.08-1.94-2.19-2.87-3.34-6.69-8.3-15.07-17.13-29.96-17.52,2.36-1,4.35-2.06,5.95-3.18,13.19-9.14,23.49-21.48,28.48-27.46,4.65-5.59,8.04-10.18,11.04-14.24,6.48-8.76,10.75-14.55,21.23-21.35,6.92-4.49,15.44-7.58,18.08-8.5.18-.05.36-.11.54-.17.05,0,.1-.03.15-.05.03,0,.07-.02.09-.03.03,0,.06,0,.09-.03h0c.23-.06.48-.14.73-.22,4.66-1.42,13.36-4.05,28.77-2.55,26.44,2.57,26.63,19.44,26.62,20.19Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
    </g>
  );
};

export default Chest;
