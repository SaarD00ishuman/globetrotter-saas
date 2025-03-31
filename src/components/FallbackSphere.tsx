
import React from 'react';

const FallbackSphere = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-40 h-40 bg-blue-100 rounded-full animate-pulse flex items-center justify-center">
        <span className="text-blue-500">Loading...</span>
      </div>
    </div>
  );
};

export default FallbackSphere;
