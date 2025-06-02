"use client"
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import client from '../../../../sanityClient';


interface initiativesData {
    id: number;
    title: string;
     image: string;
    alt: string;
    shortText: string;
    longText: string;
    slug: string;
}


const FlagshipInitiatives: React.FC = () => {
  const [initiatives, setInitiatives] = useState<initiativesData[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
       
        const initiativeQuery = `
          *[_type == "initiative"] | order(id asc) {
            _id,
            title,
            shortText,
            longText,
            alt,
            "image": image.asset->url,
            "slug": slug.current
          }
        `;

        const [ initiativeData] = await Promise.all([
          client.fetch(initiativeQuery)
        ]);

        setInitiatives(initiativeData);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };

    fetchContent();
  }, []);
  return (
    <div className=" min-h-screen">
      <Head>
        <title>Flagship Initiatives - ILead Global Foundation</title>
        <meta name="description" content="Welcome to ILead Global Foundation, empowering leaders for a better tomorrow." />
      </Head>

     

    

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 items-stretch">
          {initiatives.map((initiative) => (
                      <Link href={`/flagshipinitatives/${initiative.slug ?? ""}`} passHref key={initiative.id}>

            <motion.div key={initiative.id} whileHover={{ scale: 1.05 }} className=" bg-white rounded-lg shadow-md h-full">
              <Image src={initiative.image} alt={initiative.alt} width={400} height={100} className="w-full rounded-t-lg h-64" />
              <h3 className="text-2xl font-semibold mt-4">{initiative.title}</h3>
              <p className='text-[#848484] px-4 pb-2 text-justify text-lg'>{initiative.shortText}</p>
              <p className='text-[#848484] px-4 text-justify text-lg'>{initiative.longText} </p>
            </motion.div>
              </Link>
          ))}
        </div>
      </motion.div>

      

     

    
    </div>
  );
};

export default FlagshipInitiatives;