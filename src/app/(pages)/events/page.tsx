'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './event.module.css'; // Import the CSS module
import { eventItems } from '@/dumby/event';

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  // const eventItems = [
  //   {
  //     id: 1,
  //     image: '/img/homes.jpeg',
  //     desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, sapiente.',
  //   },
  //   {
  //     id: 2,
  //     image: '/img/home2.jpeg',
  //     desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
  //   },
  //   {
  //     id: 3,
  //     image: '/img/home3.jpeg',
  //     desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure.',
  //   },
  //   {
  //       id: 4,
  //       image: '/img/home4.jpeg',
  //     },
  //     {
  //       id: 5,
  //       image: '/img/home5.jpeg',
  //     }
  // ];

  return (
    <section id="gallery" className="gallery section bg-gray-50 py-10 px-4 sm:px-10 flex flex-col gap-10">
      <div className=" w-full " data-aos="fade-up">
        <h2 className='flex items-center text-4xl font-bold text-center text-[#040677]'>Events <hr className='w-32 h-[2px] ml-2 mt-2 bg-[#040677]' /></h2>
        <div className='text-left'>
          <span>Check Our </span>
          <span className="description-title">Events</span>
        </div>
      </div>

      <div className="w-full" data-aos="fade-up" data-aos-delay="100">
        <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {eventItems.map((item) => (
                
            <div key={item.id} className={styles.galleryItem}>
              <a
                href={item.image}
                className="glightbox"
                data-gallery="images-gallery"
              >
                <Image
                  src={item.image}
                  alt="Gallery 1"
                  width={500}
                  height={300}
                  className={styles.galleryImage}
                />
                {item.desc&&
              <div className={styles.galleryInfo}>
                <p className='text-lg'>{item.desc}</p>
              </div>}
              </a>
            </div>
            ))}

            

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
