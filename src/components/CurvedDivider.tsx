import React from 'react';

interface CurvedDividerProps {
  fillColor?: string;
  inverted?: boolean;
}

export const CurvedDivider: React.FC<CurvedDividerProps> = ({
  fillColor = 'fill-[#F3F6FA] dark:fill-[#07192E]',
  inverted = false
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${inverted ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg
        className={`relative block w-full h-8 sm:h-12 lg:h-16 ${fillColor}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
};
