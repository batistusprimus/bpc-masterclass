'use client';

import React from 'react';

const ActionButtons = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  const handleOpenMasterclass = () => {
    window.open('/masterclass', '_blank');
  };

  return (
    <>
      <button
        onClick={handleOpenMasterclass}
        className="group relative flex items-center gap-3 bg-[#9F99EB] text-white px-10 py-5 rounded-xl transition-all duration-300 overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative z-10 flex items-center gap-3">
          <span className="text-2xl">▶</span>
          <span className="font-medium text-lg">Accéder à la Masterclass</span>
        </span>
      </button>
      <button
        onClick={handleDownloadPDF}
        className="group relative flex items-center gap-3 bg-[#9B8E7D] text-white px-10 py-5 rounded-xl transition-all duration-300 overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-[#9B8E7D] to-[#8A7D6D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative z-10 flex items-center gap-3">
          <span className="text-2xl">⭳</span>
          <span className="font-medium text-lg">Télécharger en PDF</span>
        </span>
      </button>
    </>
  );
};

export default ActionButtons; 