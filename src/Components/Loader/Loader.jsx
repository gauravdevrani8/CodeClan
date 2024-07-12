// src/components/Loader.jsx

import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
      <p className="text-center text-gray-500 text-xl font-semibold">Loading...</p>
    </div>
  );
};

export default Loader;
