"use client"
import LeaderComp from '@/components/leaderComponents/LeaderComp';
import useBlogsByType from '@/hooks/leader';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

const OurStory: React.FC = () => {

  const { data, loading, error } = useBlogsByType('leadership');
  console.log("🚀 ~ data:", data)
  return (
    <div className="sm:p-10 p-2 bg-[#f5f5f5]">
      <Head>
        <title>About Us - ILead Global Foundation</title>
        <meta name="description" content="Learn more about ILead Global Foundation, our mission, vision, and impact." />
      </Head>

      <h2 className="text-4xl font-bold text-[#040677] text-center pb-8">Our Story</h2>
      {/* <p className="mt-6 text-lg text-[#848484]">
        Since 2019, ILead Global Foundation has been dedicated to nurturing, developing, and empowering leaders across various fields. Our mission is to equip individuals with the necessary skills, knowledge, and resources to create meaningful change in society. Rooted in mentorship, innovation, and inclusivity, we are committed to fostering leadership that drives transformation and progress.
      </p> */}
      <div className='flex flex-col gap-6 '>


        <h2 className='flex items-center text-left text-[#040677] text-3xl font-semibold'>Our story can also be a part of that page itself <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
        <p className='text-lg text-justify'>iLEAD Global Foundation was established in 2019 with the goal of driving societal change through fostering leadership qualities and providing quality mentorship to people of all social and economic classes. As an organization that fosters dialogue and collaboration, we actively engage with critical global issues like green energy and promote sustainable development, multilateralism, and international diplomacy. We are dedicated to empowering youth, women, and the underrepresented segments of society, striving to build a world that embraces multilateralism as a means to address shared challenges and foster a more democratic, progressive, and innovative society.</p>
        <h2 className='flex items-center text-left text-[#040677] text-3xl font-semibold'>Our Story <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
        <p className='text-lg text-justify'>Our organization was formed in 2019, with the goal of driving positive change in society through empowering the people who are at present voiceless. We are huge believers in our philosophy of “Connect, Nurture and Develop” which is best reflected in our work in the last six years. Through our initiatives like “Celebrating New India”, “iLEAD Women” and “Rising Leaders”, we aim to create a community of progressive, goal-driven individuals who will help us achieve our dream of a more inclusive, progressive, and prosperous society.
        </p>

        <h2 className='flex items-center text-left text-[#040677] text-3xl font-semibold'>Our Achievements <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
        <div className='flex flex-col gap-2'>
          <p className='text-lg text-justify'>
            In the last half a decade or so, we have succeeded in establishing a global platform for dialogues, nurturing diverse thoughts and ideas and influencing policy decisions with suggestions, which are rooted in strong evidence through our &ldquo;Celebrating New India&rdquo; initiative.
          </p>
          <p className='text-lg text-justify'>
            Our other prominent initiative, &ldquo;iLEAD Women&rdquo;, has empowered women through mentorship and built a strong community, challenging traditional norms and advocating for gender equality.
          </p>
          <p className='text-lg text-justify'>
            We successfully organised the &ldquo;Rising Leaders - for Inclusive & Progressive Change&rdquo; program, including a significant event from December 2-4, 2023, in Delhi, bringing together leaders and emerging talents. We have trained an estimated 20-26 youth per batch and our program has proved to be a success.
          </p>
        </div>
      </div>


    </div>
  );
}

export default OurStory;
