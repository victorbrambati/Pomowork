import React from 'react';

const EllipseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="6"
        cy="6"
        r="5.3"
        stroke="url(#paint0_radial)"
        strokeWidth="1.4"
      />
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.1 1.65) rotate(132.769) scale(16.3466)"
        >
          <stop stopColor="white" />
          <stop offset="1" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default EllipseIcon;
