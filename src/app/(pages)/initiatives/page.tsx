"use client";
import React, { useState } from 'react';
import Blog from '../../../components/blogs/Blog';

const Initiatives: React.FC = () => {
  const [selectedType, setSelectedType] = useState("initiatives"); // Default type

  return (
    <div className="md:mx-10 mx-2 my-2 ">
      {/* Header Section */}
      <div className="bg-[#333333] w-full text-white md:p-6 p-2 h-[calc(100vh-9rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <h3 className="text-4xl font-bold text-center">Initiatives</h3>

      <div className='flex md:flex-row flex-col p-6 gap-4 md:gap-0'>
        {/* Category Selection */}
        <div className="md:w-1/3 w-full flex flex-col bg-[#212121] p-8 gap-2 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          <button
            className={`text-2xl p-2 text-left text-white hover:bg-[#0169a7] ${selectedType === "initiatives" ? "bg-[#0169a7]" : ""}`}
            onClick={() => setSelectedType("initiatives")}
          >
            Initiatives
          </button>
          <button
            className={`text-2xl p-2  text-left text-white hover:bg-[#0169a7] ${selectedType === "featured" ? "bg-[#0169a7]" : ""}`}
            onClick={() => setSelectedType("featured")}
          >
            Featured
          </button>
          <button
            className={`text-2xl p-2 text-left text-white hover:bg-[#0169a7] ${selectedType === "updated" ? "bg-[#0169a7]" : ""}`}
            onClick={() => setSelectedType("updated")}
          >
            All Updated
          </button>

          
        </div>

        {/* Blog Component (Shows Selected Type) */}
        <div className="md:w-2/3 w-full ">
          <Blog type={selectedType} nums={2} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
