
import React from 'react';

const FallbackSphere = () => {
  return (
    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-travel-ocean to-travel-sky mx-auto opacity-70 animate-pulse-soft">
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-transparent to-travel-forest/20"></div>
    </div>
  );
};

export default FallbackSphere;
