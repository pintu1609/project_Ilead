"use client"
import LeaderComp from '@/components/leaderComponents/LeaderComp';
import useBlogsByType from '@/hooks/leader';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Alumminetwork: React.FC = () => {

  const { data, loading, error } = useBlogsByType('alumninetwork');
  console.log("🚀 ~ data:", data)
  return (
    <div className="sm:p-10 p-2 bg-[#f5f5f5]">
      <Head>
        <title>About Us - ILead Global Foundation</title>
        <meta name="description" content="Learn more about ILead Global Foundation, our mission, vision, and impact." />
      </Head>

      <h2 className="text-4xl font-bold text-[#040677] text-center">Alumni nework from rising leaders</h2>
      <p className="mt-6 text-lg text-[#848484]">
        Since 2019, ILead Global Foundation has been dedicated to nurturing, developing, and empowering leaders across various fields. Our mission is to equip individuals with the necessary skills, knowledge, and resources to create meaningful change in society. Rooted in mentorship, innovation, and inclusivity, we are committed to fostering leadership that drives transformation and progress.
      </p>
      <div className='flex flex-col justify-center items-center'>
             {loading ? (
               <div className='flex justify-center items-center h-[40vh]'>
                 <ClipLoader />
               </div>
             ) : (
               data?.length > 0 ? (
                 <div className="mt-10 grid md:grid-cols-3 gap-6">
                   {data.map((leader) => (
                     <LeaderComp key={leader.id} leader={leader} />
                   ))}
                 </div>
               ) : (
                 <div className="flex justify-center items-center h-[40vh] w-full">
                   <h2 className='text-center text-gray-600 text-4xl'>No Data Available</h2>
                 </div>
               )
             )}
           </div>


    </div>
  );
}

export default Alumminetwork;
