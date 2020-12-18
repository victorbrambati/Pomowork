import React from 'react';
const PieChart = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="1">
        <path
          d="M12.0022 3.78047C12.2488 3.76016 12.498 3.75 12.7499 3.75C17.7186 3.75 21.7499 7.78125 21.7499 12.75C21.7499 17.7188 17.7186 21.75 12.7499 21.75C10.8432 21.7499 8.98584 21.1446 7.44525 20.0213C5.90467 18.8979 4.76043 17.3145 4.17739 15.4992"
          stroke="#848386"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M12 2.25C6.61501 2.25 2.25001 6.615 2.25001 12C2.24796 13.3731 2.53697 14.7311 3.09798 15.9844L12 12V2.25Z"
          stroke="#848386"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default PieChart;
