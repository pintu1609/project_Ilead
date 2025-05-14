import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Trustees: React.FC = () => {
  return (
    <div className="sm:p-10 p-2 bg-[#f5f5f5]">
      <Head>
        <title>About Us - ILead Global Foundation</title>
        <meta name="description" content="Learn more about ILead Global Foundation, our mission, vision, and impact." />
      </Head>

      <h2 className="text-4xl font-bold text-center">Trustees</h2>
      <p className="mt-6 text-lg text-[#848484]">
        Since 2019, ILead Global Foundation has been dedicated to nurturing, developing, and empowering leaders across various fields. Our mission is to equip individuals with the necessary skills, knowledge, and resources to create meaningful change in society. Rooted in mentorship, innovation, and inclusivity, we are committed to fostering leadership that drives transformation and progress.
      </p>
        <div className='flex flex-col justify-center items-center h-[40vh]'>

      <h1 className='text-3xl font-bold'> Coming soon</h1>
        </div>

     
    </div>
  );
}

export default Trustees;
