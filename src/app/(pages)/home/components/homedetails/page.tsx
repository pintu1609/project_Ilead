"use client"
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Homedetails: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Head>
        <title>Home - ILead Global Foundation</title>
        <meta name="description" content="Welcome to ILead Global Foundation, empowering leaders for a better tomorrow." />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="sm:p-10 p-4 "
      >
        <p className="mt-4 text-lg text-[#848484]">
          Empowering leaders, fostering innovation, and driving social transformation for a better tomorrow. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo corporis aliquid dignissimos nisi voluptates reprehenderit officiis repellendus tempore, vel tenetur harum molestias est dicta autem rerum eum veritatis provident quia accusantium iste dolores hic nesciunt saepe officia? Veniam, aut provident!
        </p>
        <p className="mt-4 text-lg text-[#848484]">
          Join us in our mission to shape the future of leadership and innovation. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit alias placeat reiciendis est laudantium repudiandae optio? Blanditiis, accusantium dignissimos explicabo, tempore dicta id harum vel possimus aut maxime saepe inventore eaque voluptates. Nemo suscipit aliquid est? Sint tempora magnam voluptatem!
        </p>
        </motion.div>
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="sm:p-10 p-4 text-center"
      >
        <h2 className="text-4xl font-semibold">Who We Are</h2>
        <Image src="/img/home.png" alt="Who We Are" width={800} height={400} className="w-full mt-4 rounded-lg shadow-md" />
        <p className="mt-4 text-lg text-[#848484]">
          We are a non-profit organization committed to leadership development and innovation. Our foundation operates on the principle that leadership is not just about authority but about influencing positive change. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, id aut quibusdam ipsam hic nisi provident? Aliquid consequuntur itaque et consectetur quasi dolor. Inventore molestias neque veritatis cum unde eligendi.
        </p>
        <p className="mt-4 text-lg text-[#848484]">
          We are a non-profit organization committed to leadership development and innovation. Our foundation operates on the principle that leadership is not just about authority but about influencing positive change. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, id aut quibusdam ipsam hic nisi provident? Aliquid consequuntur itaque et consectetur quasi dolor. Inventore molestias neque veritatis cum unde eligendi.
        </p>
        <p className="mt-4 text-lg text-[#848484]">
          We are a non-profit organization committed to leadership development and innovation. Our foundation operates on the principle that leadership is not just about authority but about influencing positive change. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, id aut quibusdam ipsam hic nisi provident? Aliquid consequuntur itaque et consectetur quasi dolor. Inventore molestias neque veritatis cum unde eligendi.
        </p>
      </motion.div>

      {/* Core Philosophy Section */}
      <motion.div
        className="sm:p-10 p-4 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold text-center">Our Core Philosophy</h2>
        <p className="mt-4 text-lg text-[#848484] text-center">
          Our philosophy revolves around three pillars: <strong>Connect, Nurture, and Develop</strong>.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <motion.div whileHover={{ scale: 1.05 }} className=" bg-[#f0f0f0] rounded-lg shadow-md pb-4 ">
            <Image src="/img/home.png" alt="Connect" width={400} height={400} className="mx-auto w-full rounded-t-lg h-64" />
            <h3 className="text-2xl font-semibold mt-2 text-center">Connect</h3>
            <p className="mt-2 text-[#848484] px-4">Bringing together passionate individuals, experts, and thought leaders.</p>
            <p className='text-[#848484] px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam nihil eligendi eveniet, sequi aperiam magnam porro. Blanditiis harum voluptates nemo labore tempore, eos, sed asperiores ab deleniti reprehenderit assumenda.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className=" bg-[#f0f0f0] rounded-lg shadow-md pb-4 ">
            <Image src="/img/home.png" alt="Nurture" width={400} height={100} className="w-full mx-auto rounded-t-lg h-64" />
            <h3 className="text-2xl font-semibold mt-2 text-center">Nurture</h3>
            <p className="mt-2 text-[#848484] px-4">Providing comprehensive training, mentorship, and networking opportunities.</p>
            <p className='text-[#848484] px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam nihil eligendi eveniet, sequi aperiam magnam porro. Blanditiis harum voluptates nemo labore tempore, eos, sed asperiores ab deleniti reprehenderit assumenda.</p>

          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#f0f0f0] rounded-lg shadow-md pb-4">
            <Image src="/img/ourinitiative.png" alt="Develop" width={400} height={100} className="w-full mx-auto rounded-t-lg h-64" />
            <h3 className="text-2xl font-semibold mt-2 text-center">Develop</h3>
            <p className="mt-2 text-[#848484] px-4">Equipping future leaders with the confidence and skills to make a tangible impact.</p>
            <p className='text-[#848484] px-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia perspiciatis odit eum accusantium maxime ullam eveniet, nam enim, commodi vel beatae non temporibus? Aut ipsam, nobis ea possimus culpa expedita?</p>
          </motion.div>
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
        <h2 className="text-4xl font-semibold">Our Initiatives</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6 ">
          {[
            { title: "Celebrating New India", img: "/img/dumby_img.jpeg", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quasi." },
            { title: "ILead Women", img: "/img/home.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quasi." },
            { title: "Rising Leaders", img: "/img/home.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quasi." },
          ].map((initiative, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className=" bg-white rounded-lg shadow-md">
              <Image src={initiative.img} alt={initiative.title} width={400} height={100} className="w-full rounded-t-lg h-64" />
              <h3 className="text-2xl font-semibold mt-4">{initiative.title}</h3>
              <p className='text-[#848484] px-4 text-left'>{initiative.desc} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero et iusto adipisci provident, odio fugit id tenetur praesentium? Quo aliquid iste placeat explicabo modi culpa deleniti totam molestias corporis? Odit!</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
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
      </motion.div>
    </div>
  );
};

export default Homedetails;