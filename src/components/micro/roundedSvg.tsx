import { Box } from '@mantine/core';
const Rounded = () => {
  return (
    <>
      <Box>
        <svg
          width="280"
          height="280"
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="140"
            cy="140"
            r="139"
            stroke="url(#paint0_linear_0_229)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_229"
              x1="-2.68618"
              y1="-2.68618"
              x2="266.57"
              y2="266.57"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A9B7" />
              <stop offset="0.5027" stopColor="#4C32F2" />
              <stop offset="1" stopColor="#9F00BE" />
            </linearGradient>
          </defs>
        </svg>
      </Box>
    </>
  );
};

export default Rounded;
