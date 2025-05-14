"use client"
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { initiativesData } from '@/dumby/initiatives';
import { philosophyData } from '@/dumby/corePhilosophy';

const CorePhilosophy: React.FC = () => {
  return (
    <div className=" min-h-screen">
      <Head>
        <title>Core Philosophy - ILead Global Foundation</title>
        <meta name="description" content="Welcome to ILead Global Foundation, empowering leaders for a better tomorrow." />
      </Head>

     

      {/* Core Philosophy Section */}
      <motion.div
        className="sm:p-10 p-4 rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className=" flex items-center text-4xl font-semibold text-[#040677] text-left">Our Core Philosophy <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
        <p className="mt-4 text-lg text-[#848484] text-justify">
          Empowering young minds through structured mentorship and inclusive leadership opportunities.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
        {philosophyData.map((item) => (
          <motion.div whileHover={{ scale: 1.05 }} key={item.id} className=" bg-[#f0f0f0] rounded-lg shadow-md pb-4 ">
            <Image src={item.image} alt={item.alt} width={400} height={400} className="mx-auto w-full rounded-t-lg h-64" />
            <h3 className="text-2xl font-semibold mt-2 text-center">{item.title}</h3>
            <p className="mt-2 text-[#848484] px-4 pb-2 text-justify text-lg">{item.shortText}</p>
            <p className='text-[#848484] px-4 text-justify text-lg'>{item.longText}</p>
          </motion.div>
        ))}
        </div>
      </motion.div>

      {/* Initiatives Section */}
      <motion.div
        className="sm:p-10 p-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="flex items-center text-left text-[#040677] text-4xl font-semibold">Our Flagship Initiatives <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
        <p className='mt-4 text-lg text-[#848484] text-justify'>Building inclusive leadership through purpose-driven programs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 ">
          {initiativesData.map((initiative) => (
            <motion.div key={initiative.id} whileHover={{ scale: 1.05 }} className=" bg-white rounded-lg shadow-md">
              <Image src={initiative.img} alt={initiative.title} width={400} height={100} className="w-full rounded-t-lg h-64" />
              <h3 className="text-2xl font-semibold mt-4">{initiative.title}</h3>
              <p className='text-[#848484] px-4 pb-2 text-justify text-lg'>{initiative.desc.short}</p>
              <p className='text-[#848484] px-4 text-justify text-lg'>{initiative.desc.full} </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      

     

      {/* Call to Action */}
      {/* <motion.div
        className="bg-black text-white py-10 text-center mt-10 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold">Join Us</h2>
        <p className="mt-4 text-lg">Become a part of our leadership movement and shape a better future.</p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/contact" className="mt-6 px-6 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-lg inline-block">
            Get Involved
          </Link>
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default CorePhilosophy;