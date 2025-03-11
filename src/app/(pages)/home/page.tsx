'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import style from './homeimage.module.css';
import Homedetails from './components/homedetails/page';

const Home = () => {
  return (
    <div className="flex flex-col w-full mt-[-80px] bg-[#f5f5f5]">
      {/* Hero Section */}
      <div className={`relative w-full h-screen flex items-center justify-center ${style.container}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center p-6"
        >
         <motion.h1 
                   initial={{ opacity: 0, y: -50 }} 
                   animate={{ opacity: 1, y: 0 }} 
                   transition={{ duration: 1 }} 
                   className="sm:text-6xl text-4xl font-bold text-[#848484] drop-shadow-lg"
                 >
                   Welcome to ILead Global Foundation
                 </motion.h1>
                 <motion.p 
                   initial={{ opacity: 0, y: 50 }} 
                   animate={{ opacity: 1, y: 0 }} 
                   transition={{ duration: 1, delay: 0.5 }} 
                   className="mt-4 text-lg text-[#848484] w-3/4"
                 >
                   Empowering leaders, fostering innovation, and driving social transformation for a better tomorrow.
                 </motion.p>
                 <motion.a 
                   href="#about" 
                   whileHover={{ scale: 1.1 }} 
                   whileTap={{ scale: 0.95 }} 
                   className="mt-6 px-6 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-lg"
                 >
                   Learn More
                 </motion.a>
        </motion.div>

        <Image
          src="/img/home.png"
          alt="background image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-50"
        />
      </div>
      
      {/* Animated Sections */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        
      >
        <Homedetails />
      </motion.div>
    </div>
  );
};

export default Home;
