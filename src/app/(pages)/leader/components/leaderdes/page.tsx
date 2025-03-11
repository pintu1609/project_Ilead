"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const leaders = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: '/img/dumby_img.jpeg',
    description:
      'John Doe is a visionary leader with a passion for social change. With over 20 years of experience in leadership development, he has pioneered various programs aimed at nurturing young leaders. His expertise in mentorship and strategic planning has been instrumental in the growth of ILead Global Foundation.',
  },
  {
    name: 'Jane Smith',
    role: 'Director of Leadership Programs',
    image: '/img/dumby_img.jpeg',
    description:
      'Jane Smith specializes in leadership education and training. She has developed numerous mentorship programs that have empowered individuals across different sectors. Her efforts in creating inclusive leadership initiatives have made a significant impact in the community.',
  },
  {
    name: 'Michael Johnson',
    role: 'Head of Innovation & Research',
    image: '/img/dumby_img.jpeg',
    description:
      'Michael Johnson is dedicated to fostering innovation in leadership. He leads research initiatives that explore new methodologies for developing future leaders. His work bridges the gap between technology and leadership, ensuring that young professionals have the tools they need to succeed.',
  },
];

// Image Slideshow for Rising Leaders
const risingLeadersImages = [
  '/img/home.png',
  '/img/ourleader.png',
  '/img/ourinitiative.png',
];

const Leaderdes: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % risingLeadersImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sm:p-10 p-2">
      <Head>
        <title>Our Leaders - ILead Global Foundation</title>
        <meta
          name="description"
          content="Meet the inspiring leaders of ILead Global Foundation who drive positive change."
        />
      </Head>

      <h1 className="text-5xl font-bold text-center">Our Leaders</h1>
      <p className="mt-6 text-lg text-[#848484]">
        ILead Global Foundation is proud to have a team of visionary leaders who drive our mission forward. These individuals come from diverse backgrounds and bring their expertise, experience, and dedication to fostering leadership, innovation, and societal change. Our leaders are committed to mentoring, guiding, and empowering individuals to become future change-makers.
      </p>

      <h2 className="text-4xl font-semibold mt-10">Rising Leaders 2023-2024</h2>
      <p className="mt-4 text-lg text-[#848484]">
        We are proud to announce that ILEAD has successfully conducted two courses of the <strong>Rising Leaders</strong> program for <strong>Inclusive and Progressive Change</strong>.
      </p>

      <Card className="mt-6 shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Image Slideshow */}
       

        {/* Right Section - Program Details */}
        <CardContent className="w-full md:w-1/2 p-6">
          <p className="text-lg text-[#848484]">
            This program, organized by <strong>ILead Global Foundation</strong> and supported by <strong>ONGC</strong>, took place from <strong>March 2023 to December 2024</strong>. It was conducted in both online and onsite modes and covered a <strong>comprehensive curriculum</strong> focusing on:
          </p>
          <ul className="list-disc list-inside mt-4 text-lg text-[#848484]">
            <li>Leadership types and styles</li>
            <li>Leadership in elections</li>
            <li>Effective communication</li>
            <li>Leveraging social media</li>
            <li>Technology in civic, political, and government outreach</li>
            <li>Campaign design and execution</li>
            <li>Law of Democracy</li>
            <li>International Diplomacy & Relations</li>
          </ul>
          <p className="mt-4 text-lg text-[#848484]">
            This initiative has been a major milestone in shaping future leaders, ensuring that they are equipped with the right knowledge and skills to drive <strong>inclusive and progressive change</strong>.
          </p>
        </CardContent>
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src={risingLeadersImages[currentImageIndex]}
            alt="Rising Leaders Program"
            layout="fill"
            objectFit="fill"
            className="transition-opacity duration-1000"
          />
        </div>
      </Card>

      <h2 className="text-4xl font-semibold mt-10 text-center">Meet Our Leaders</h2>
      <p className="mt-4 text-lg text-[#848484] text-center">
        Our leadership team comprises experts from various fields, including education, policy-making, social impact, business, and technology. They work collaboratively to shape the vision and direction of ILead Global Foundation.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {leaders.map((leader, index) => (
          <Card key={index} className="shadow-lg rounded-xl overflow-hidden">
            <Image
              src={leader.image}
              alt={leader.name}
              width={400}
              height={500}
              className="w-full h-64 object-cover"
            />
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-semibold">{leader.name}</h3>
              <p className="text-lg text-[#636363]">{leader.role}</p>
              <p className="mt-4 text-[#848484]">{leader.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-4xl font-semibold mt-10">The Role of Our Leaders</h2>
      <p className="mt-4 text-lg text-[#848484]">
        Our leaders actively engage in mentoring, policy advocacy, and community outreach. They play a crucial role in shaping the direction of our programs and ensuring that our mission aligns with the evolving needs of society. Through their dedication, they inspire others to take on leadership roles and contribute meaningfully to global development.
      </p>

      <h2 className="text-4xl font-semibold mt-6">Join the Leadership Network</h2>
      <p className="mt-4 text-lg text-[#848484]">
        We believe in fostering a global network of leaders. If you are passionate about leadership and social change, we invite you to join us. Whether as a mentor, advisor, or collaborator, your expertise can help shape the future of leadership development.
      </p>
    </div>
  );
};

export default Leaderdes;
