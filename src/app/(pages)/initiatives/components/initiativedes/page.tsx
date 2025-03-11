"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const ILeadWomenImages = ['/img/home.png', '/img/ourleader.png', '/img/contact.jpg'];
const RisingLeadersImages = ['/img/contact.jpg', '/img/ourleader.png', '/img/ourinitiative.png'];

const Initiativesdes: React.FC = () => {
  const [womenImageIndex, setWomenImageIndex] = useState(0);
  const [leadersImageIndex, setLeadersImageIndex] = useState(0);

  useEffect(() => {
    const womenInterval = setInterval(() => {
      setWomenImageIndex((prevIndex) => (prevIndex + 1) % ILeadWomenImages.length);
    }, 5000);

    const leadersInterval = setInterval(() => {
      setLeadersImageIndex((prevIndex) => (prevIndex + 1) % RisingLeadersImages.length);
    }, 6000);

    return () => {
      clearInterval(womenInterval);
      clearInterval(leadersInterval);
    };
  }, []);

  return (
    <div className="sm:p-10 p-2">
      <Head>
        <title>Our Initiatives - ILead Global Foundation</title>
        <meta name="description" content="Explore the transformative initiatives of ILead Global Foundation." />
      </Head>

      <h1 className="text-5xl font-bold text-center">Our Initiatives</h1>
      <p className="mt-6 text-lg text-[#848484]">
        ILead Global Foundation is committed to fostering leadership, innovation, and social transformation through a series of well-structured initiatives. Our programs empower individuals by providing them with mentorship, resources, and a platform to create meaningful change in society. These initiatives cater to aspiring leaders, professionals, and changemakers who aim to drive progress in their respective fields.
      </p>

      {/* Celebrating New India */}
      <h2 className="text-4xl font-semibold mt-6">Celebrating New India</h2>
      <p className="mt-4 text-lg text-[#848484]">
        Celebrating New India is a transformative program that fosters dialogue, gathers diverse perspectives, and empowers individuals to be agents of change. The initiative brings together government officials, thought leaders, activists, and civil society members to engage in meaningful discussions on national progress.
      </p>

      {/* ILead Women */}
      <h2 className="text-4xl font-semibold mt-6">ILead Women</h2>
      <div className="relative w-full md:w-2/3 mx-auto mt-4 shadow-lg rounded-lg overflow-hidden">
        <Image src={ILeadWomenImages[womenImageIndex]} alt="ILead Women" width={800} height={400} className="w-full h-auto object-cover" />
      </div>
      <p className="mt-4 text-lg text-[#848484]">
        ILead Women is an initiative dedicated to fostering women’s leadership, breaking societal barriers, and building a supportive community. This program is designed to equip women with essential skills, resources, and mentorship opportunities to help them excel personally and professionally.
      </p>
      <ul className="list-disc list-inside mt-4 text-lg text-[#848484]">
        <li>Mentorship programs that connect aspiring women leaders with accomplished professionals.</li>
        <li>A digital platform for knowledge-sharing, networking, and access to leadership development resources.</li>
        <li>Opportunities for roundtable discussions, webinars, and exposure visits to gain real-world experience.</li>
      </ul>

      {/* Rising Leaders */}
      <h2 className="text-4xl font-semibold mt-6">Rising Leaders</h2>
      <div className="relative w-full md:w-2/3 mx-auto mt-4 shadow-lg rounded-lg overflow-hidden">
        <Image src={RisingLeadersImages[leadersImageIndex]} alt="Rising Leaders" width={800} height={400} className="w-full h-auto object-cover" />
      </div>
      <p className="mt-4 text-lg text-[#848484]">
        Rising Leaders is an initiative designed to train and empower young individuals from diverse backgrounds. This program identifies promising youth and provides them with opportunities to develop leadership skills, gain mentorship, and engage in real-world problem-solving experiences.
      </p>
      <ul className="list-disc list-inside mt-4 text-lg text-[#848484]">
        <li>Leadership development through structured training sessions.</li>
        <li>Providing skill-building workshops on communication, decision-making, and problem-solving.</li>
        <li>Encouraging cross-cultural understanding and collaboration by bringing together youth from diverse backgrounds.</li>
      </ul>

      <h2 className="text-4xl font-semibold mt-6">Our Commitment to Change</h2>
      <p className="mt-4 text-lg text-[#848484]">
        At ILead Global Foundation, we believe that leadership is about taking action. Our initiatives are designed to not only nurture future leaders but also to create an ecosystem that supports continuous learning, innovation, and progress. By engaging with communities, policymakers, and industry leaders, we ensure that our efforts lead to tangible and lasting societal change.
      </p>

      <h2 className="text-4xl font-semibold mt-6">Get Involved</h2>
      <p className="mt-4 text-lg text-[#848484]">
        We invite individuals, professionals, and organizations to join us in our mission to develop leaders for a better future. Whether you want to participate in our programs, mentor aspiring leaders, or contribute through partnerships, your support can help drive meaningful change.
      </p>
    </div>
  );
};

export default Initiativesdes;
