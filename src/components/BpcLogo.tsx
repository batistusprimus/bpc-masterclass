const BpcLogo = () => {
  return (
    <svg 
      width="180" 
      height="60" 
      viewBox="0 0 180 60" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="white">
        {/* Lion symbolique */}
        <path d="M30 15C40 15 48 23 48 33S40 51 30 51 12 43 12 33 20 15 30 15z" />
        <path d="M10 48s3-4 10-8c5-3 8-4 10-4s5 1 10 4c7 4 10 8 10 8" stroke="white" strokeWidth="2" fill="none" />
        
        {/* B */}
        <path d="M75 15h15c7 0 12 5 12 12s-5 12-12 12H75V15z" />
        
        {/* P */}
        <path d="M115 15h15c7 0 12 5 12 12s-5 12-12 12h-15V15z" />
        
        {/* C */}
        <path d="M155 15c8 0 15 5 15 12s-7 12-15 12-15-5-15-12 7-12 15-12z" />
      </g>
    </svg>
  );
};

export default BpcLogo; 