import React from 'react';

type PreviousGroupIconProps = {
  disabled?: boolean;
};

const PreviousGroupIcon: React.FC<PreviousGroupIconProps> = ({ disabled }) => {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.47136 0.528606C5.21101 0.268256 4.7889 0.268256
          4.52855 0.528606L0.528555 4.52861C0.268205 4.78896 0.268205
          5.21107 0.528555 5.47141L4.52855 9.47141C4.7889 9.73176 5.21101
          9.73176 5.47136 9.47141C5.73171 9.21107 5.73171 8.78896 5.47136
          8.52861L1.94277 5.00001L5.47136 1.47141C5.73171 1.21107 5.73171
          0.788955 5.47136 0.528606Z"
        fill={disabled ? '#B4BDC3' : '#313237'}
      />
    </svg>
  );
};

export default PreviousGroupIcon;
