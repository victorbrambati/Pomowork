import React from 'react';

const Line = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="249"
      height="1"
      viewBox="0 0 249 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        opacity="0.05"
        y1="0.5"
        x2="249"
        y2="0.5"
        stroke="white"
        strokeDasharray="8 8"
      />
    </svg>
  );
};

export default Line;
