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
        We aspire to create a world where every young individual, irrespective of socio-economic background, has equal opportunities to develop their leadership potential and make a significant difference in their communities. Our vision is to build tomorrow's India, today, through inclusive and progressive change
      </p>
      <h2 className="flex items-center text-[#040677] text-4xl font-semibold mt-2">Our Mission <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
      <p className="text-gray-600 mt-4 text-lg text-justify">
        We, at iLEAD Global Foundation, aim to nurture, connect, and develop the future leaders of the country who will drive inclusive and progressive change which will bring prosperity and joy to all sections of society. We aim to empower the voices of the people who are underrepresented, the women and the youth of this country. We aim to provide them with the necessary skills to succeed in all walks of life and provide global exposure to foster a more equitable and dynamic society.
      </p>


    </div>
  );
}

export default Vissionandmission;
