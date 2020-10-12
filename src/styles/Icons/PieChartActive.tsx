import React from 'react';
const PieChart = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M3.61492 19.5234C3.44602 19.5235 3.2807 19.4747 3.13893 19.3829C2.99715 19.2911 2.88497 19.1602 2.81593 19.0061C1.98056 17.1404 1.62535 15.0953 1.78267 13.0572C1.93999 11.0191 2.60483 9.05282 3.71662 7.33743C4.82841 5.62205 6.35179 4.21216 8.14794 3.23623C9.9441 2.26031 11.9559 1.74938 14.0001 1.75C14.2322 1.75 14.4547 1.84219 14.6188 2.00628C14.7829 2.17038 14.8751 2.39294 14.8751 2.625V14C14.8751 14.169 14.8262 14.3343 14.7343 14.4761C14.6424 14.6179 14.5114 14.73 14.3572 14.799L3.97203 19.4447C3.8599 19.4959 3.73819 19.5227 3.61492 19.5234V19.5234Z"
        fill="white"
      />
      <path
        d="M17.1494 3.7287C17.0859 3.71583 17.0204 3.71721 16.9576 3.73272C16.8947 3.74823 16.8361 3.7775 16.7859 3.81841C16.7358 3.85932 16.6953 3.91085 16.6675 3.96929C16.6396 4.02773 16.6251 4.09162 16.6249 4.15636V14.0001C16.6245 14.5067 16.4777 15.0024 16.2021 15.4276C15.9266 15.8527 15.5341 16.1892 15.0718 16.3965L5.63984 20.6173C5.58137 20.6434 5.52935 20.682 5.48744 20.7304C5.44553 20.7788 5.41475 20.8358 5.39728 20.8974C5.37981 20.959 5.37607 21.0237 5.38633 21.0869C5.39658 21.1501 5.42058 21.2102 5.45663 21.2632C6.17846 22.3248 7.07446 23.2568 8.10679 24.0199C10.0627 25.4749 12.4372 26.2574 14.8749 26.2501C21.147 26.2501 26.2499 21.1472 26.2499 14.8751C26.2499 9.38175 22.3354 4.78526 17.1494 3.7287Z"
        fill="white"
      />
    </svg>
  );
};

export default PieChart;
