import React from "react";

const Triceps = ({ id, fill, stroke, strokeWidth, active, onClick }) => {
  return (
    <g id={id} className={`bodymap ${active}`} onClick={onClick}>
      <path
        d="M558.73,386.68c-1.2,1.24-4.96.14-8.28-.83-4.59-1.34-9.33-2.73-12.84-.57-3.41,2.1-3.73,7.68-4.08,13.59-.32,5.5-.68,11.73-3.7,12.96-2.65,1.08-9.14-.61-24.99-14.77h0s0-.02-.02-.03c-.02-.02-.03-.03-.04-.04-1.59-1.78-3.24-3.51-5.2-5.5-8.08-8.18-28.8-40.45-36.6-52.6l-.5-.76v-.02s0,0,0,0c0,0-.02-.03-.03-.04-3.09-5.07-.72-16.32,1.57-27.21,2.25-10.68,4.56-21.65,2.09-28.59,12.14,4.23,23.77,4.75,29.99,5.02.7.04,1.33.06,1.88.09,7.16.39,14.43,6.24,14.94,6.66t.02.02s0,0,.03.03c.87.75,22.04,19.45,29.55,45.42.02.09.05.17.09.24.26.57,6.42,13.93,10.73,21.4,1.4,2.41,2.1,5.09,2.81,7.9.04.15.07.3.11.45.57,2.27,1.18,4.68,2.17,7.14,0,0,0,0,0,.02,1.75,6.98,1.03,9.28.31,10.02Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
      <path
        d="M198.03,338.14l-.03.05h0s-.45.71-.45.71c-7.81,12.15-28.53,44.42-36.6,52.6-1.97,2-3.64,3.75-5.26,5.55h0s0,.02,0,.02c-15.85,14.14-22.34,15.83-24.98,14.76-3.02-1.22-3.39-7.46-3.7-12.96-.34-5.91-.67-11.49-4.07-13.59-3.52-2.16-8.27-.77-12.85.57-3.31.97-7.08,2.07-8.28.83-.73-.74-1.44-3.03.31-10.02,0,0,0,0,0-.02.99-2.47,1.59-4.87,2.17-7.14.75-2.99,1.45-5.8,2.93-8.35,4.31-7.47,10.47-20.83,10.73-21.4.04-.08.06-.16.09-.24,7.61-26.35,29.36-45.27,29.58-45.45,0,0,.03-.02.04-.04.67-.54,7.84-6.26,14.92-6.64.56-.03,1.18-.05,1.88-.09,6.22-.27,17.86-.79,29.99-5.03-2.47,6.94-.17,17.91,2.09,28.6,2.3,10.93,4.69,22.22,1.53,27.27Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      ></path>
    </g>
  );
};

export default Triceps;
