"use client"
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Blog from '@/components/blogs/Blog';



const Homedetails: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Home - ILead Global Foundation</title>
        <meta name="description" content="Welcome to ILead Global Foundation, empowering leaders for a better tomorrow." />
      </Head>

      {/* Featured Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className='flex flex-row gap-4 items-center mt-8 mb-8'>
        <h2 className="text-4xl font-semibold text-left">Featured</h2>
        <div className='h-2 w-16 bg-[#FFC107]'>

        </div>

        </div>
        <div >
         <Blog type="featured" nums={3} />
        </div>
      </motion.div>

      {/* All Updates Section */}
      <motion.div
        
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
<div className='flex flex-row gap-4 items-center mb-8'>
        <h2 className="text-4xl font-semibold text-left py-8">All Updates</h2>
        <div className='h-2 w-16 bg-[#FFC107]'>

        </div>

        </div>   
             <div>
          <Blog type="updated" nums={3} />
        </div>
      </motion.div>
    </div>
  );
};

export default Homedetails;