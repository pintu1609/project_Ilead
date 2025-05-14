import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Vissionandmission: React.FC = () => {
  return (
    <div className="sm:p-10 p-2 bg-[#f5f5f5]">
      <Head>
        <title>About Us - ILead Global Foundation</title>
        <meta name="description" content="Learn more about ILead Global Foundation, our mission, vision, and impact." />
      </Head>

      <h2 className="text-4xl font-bold text-center">Vision and Mission</h2>
      <h2 className="flex items-center text-[#040677] text-4xl font-semibold mt-2 ">Our Vision  <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" />       </h2>
      <p className="text-gray-600 mt-4 text-lg text-justify">
        To create a world where every aspiring changemaker has access to mentorship, opportunity, and a platform to lead.
      </p>
      <h2 className="flex items-center text-[#040677] text-4xl font-semibold mt-2">Our Mission <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
      <p className="text-gray-600 mt-4 text-lg text-justify">
        To identify, nurture, and empower youth—especially those underrepresented in traditional leadership spaces—through structured mentorship, inclusive dialogue, and leadership development programs.
      </p>


    </div>
  );
}

export default Vissionandmission;
