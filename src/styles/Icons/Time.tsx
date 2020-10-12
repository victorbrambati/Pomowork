import React from 'react';

const Time = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 3.5C8.20312 3.5 3.5 8.20312 3.5 14C3.5 19.7969 8.20312 24.5 14 24.5C19.7969 24.5 24.5 19.7969 24.5 14C24.5 8.20312 19.7969 3.5 14 3.5Z"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M14 7V14.875H19.25"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Time;
