'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import style from './homeimage.module.css';
import Homedetails from './components/homedetails/page';

const images = [
  { src: '/img/event_img1.jpeg', text: 'Inspiring Leadership Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, doloremque?' },
  { src: '/img/event_img2.jpeg', text: 'Fostering Innovation Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, doloremque?' },
  { src: '/img/event_img3.jpeg', text: 'Driving Social Change Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, doloremque?' },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col mx-2 md:mx-10 my-2">
      <div className='relative flex md:flex-row flex-col gap-4 md:gap-0'>
        <div className={`relative md:w-3/4 w-full h-screen flex items-center justify-center ${style.container}`}>
          <Image
          key={currentIndex}
            src={images[currentIndex].src}
            alt="slider image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="brightness-50"
          />
          
          {/* Dots Navigation */}
          <div className="absolute bottom-5 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>  
        </div>
        
        {/* Corrected Right Side Text Box */}
        <div className="md:absolute md:right-0 md:top-1/2 md:transform-translate-y-1/2 md:w-2/5 w-full flex items-center justify-center md:p-6 ">
          <div className="bg-white p-6 shadow-lg rounded-lg text-black w-full">
            <p className="text-2xl font-semibold">{images[currentIndex].text}</p>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <Homedetails />
      </motion.div>
    </div>
  );
};

export default Home;
