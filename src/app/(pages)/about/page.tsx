import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="sm:p-10 p-2 bg-[#f5f5f5]">
      <Head>
        <title>About Us - ILead Global Foundation</title>
        <meta name="description" content="Learn more about ILead Global Foundation, our mission, vision, and impact." />
      </Head>

      <h2 className="text-4xl font-bold text-center">About Us</h2>
      <p className="mt-6 text-lg text-[#848484]">
        Since 2019, ILead Global Foundation has been dedicated to nurturing, developing, and empowering leaders across various fields. Our mission is to equip individuals with the necessary skills, knowledge, and resources to create meaningful change in society. Rooted in mentorship, innovation, and inclusivity, we are committed to fostering leadership that drives transformation and progress.
      </p>

      <h3 className="text-3xl font-semibold mt-6">Our Mission & Vision</h3>
      <p className="mt-4 text-lg text-[#848484]">
        Our mission is to cultivate well-rounded leaders who can navigate modern challenges with confidence and integrity. We strive to create a collaborative platform where individuals from diverse backgrounds can exchange ideas, inspire innovation, and contribute to a better society. 
      </p>
      <p className="mt-4 text-lg text-[#848484]">
        We envision a world where every aspiring leader has access to mentorship, guidance, and opportunities to excel. Through continuous learning and empowerment, we aim to shape individuals who not only lead but also inspire ethical and responsible change.
      </p>

      <h3 className="text-3xl font-semibold mt-10">Why ILead?</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 ">
          <h4 className="text-xl font-semibold text-center">Empowering Leaders</h4>
          <p className="mt-2 text-[#848484]">
            We focus on leadership growth by providing mentorship, training, and hands-on experiences.
          </p>
          <p className='mt-2 text-[#848484]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, doloribus! Dolore voluptatem, repellendus nam culpa a dolorem nemo, optio rerum distinctio, libero explicabo! Quis, officia eaque necessitatibus quo impedit eius repellat ullam veniam laborum eum fuga modi tempora consequuntur amet.</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 ">
          <h4 className="text-xl font-semibold text-center">Global Impact</h4>
          <p className="mt-2 text-[#848484]">
            Our initiatives foster societal change, impacting communities on a national and international level.
          </p>
          <p className='mt-2 text-[#848484]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, doloribus! Dolore voluptatem, repellendus nam culpa a dolorem nemo, optio rerum distinctio, libero explicabo! Quis, officia eaque necessitatibus quo impedit eius repellat ullam veniam laborum eum fuga modi tempora consequuntur amet.</p>

        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 ">
          <h4 className="text-xl font-semibold text-center">Innovative Approach</h4>
          <p className="mt-2 text-[#848484]">
            We combine modern strategies and technology to shape the future of leadership.
          </p>
          <p className='mt-2 text-[#848484]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, doloribus! Dolore voluptatem, repellendus nam culpa a dolorem nemo, optio rerum distinctio, libero explicabo! Quis, officia eaque necessitatibus quo impedit eius repellat ullam veniam laborum eum fuga modi tempora consequuntur amet.</p>

        </div>
      </div>

      <h3 className="text-3xl font-semibold mt-6">Our Approach: Connect, Nurture, Develop</h3>
      <p className="mt-4 text-lg text-[#848484]">
        Our leadership development model is built on three key pillars:
      </p>
      <ul className="list-disc list-inside mt-4 text-lg text-[#848484]">
        <li><strong>Connect:</strong> Uniting leaders, mentors, and experts from diverse fields to foster collaboration and knowledge exchange.</li>
        <li><strong>Nurture:</strong> Offering continuous mentorship, resources, and professional guidance to enable personal and career growth.</li>
        <li><strong>Develop:</strong> Equipping individuals with essential skills and experiences to thrive in their chosen fields and drive positive change.</li>
      </ul>

      <h3 className="text-3xl font-semibold mt-6">Our Impact</h3>
      <p className="mt-4 text-lg text-[#848484]">
        Since our inception, ILead Global Foundation has made significant contributions to leadership and societal development, including:
      </p>
      <ul className="list-disc list-inside mt-4 text-lg text-[#848484]">
        <li>Empowering emerging leaders through structured programs and mentorship.</li>
        <li>Facilitating national and international discussions on policy and societal change.</li>
        <li>Launching impactful initiatives such as Celebrating New India, ILead Women, and Rising Leaders.</li>
        <li>Providing career-transforming mentorship opportunities for aspiring professionals.</li>
      </ul>

      {/* Redesigned Cards Section */}
      <h3 className="text-3xl font-semibold mt-10">Our Core Pillars</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {/* Mentorship Card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <Image src='/img/home.png' alt="Mentorship" width={500} height={200} className="w-full h-48 object-cover" />
          <div className="p-6 text-center">
            <h4 className="text-xl font-semibold">Mentorship</h4>
            <p className="mt-2 text-[#848484]">
              We provide structured mentorship, training, and support to nurture leadership potential.
            </p>
            <p className='mt-2 text-[#848484]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, doloribus! Dolore voluptatem, repellendus nam culpa a dolorem nemo, optio rerum distinctio, libero explicabo! Quis, officia eaque necessitatibus quo impedit eius repellat ullam veniam laborum eum fuga modi tempora consequuntur amet.</p>

          </div>
        </div>

        {/* Networking and Support Card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <Image src='/img/home.png' alt="Networking and Support" width={500} height={200} className="w-full h-48 object-cover" />
          <div className="p-6 text-center">
            <h4 className="text-xl font-semibold">Networking & Support</h4>
            <p className="mt-2 text-[#848484]">
              We connect professionals with industry leaders, fostering collaboration and career growth.
            </p>
            <p className='mt-2 text-[#848484]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, doloribus! Dolore voluptatem, repellendus nam culpa a dolorem nemo, optio rerum distinctio, libero explicabo! Quis, officia eaque necessitatibus quo impedit eius repellat ullam veniam laborum eum fuga modi tempora consequuntur amet.</p>

          </div>
        </div>

        {/* Incubation Center Card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <Image src='/img/home.png' alt="Incubation Center" width={500} height={200} className="w-full h-48 object-cover" />
          <div className="p-6 text-center">
            <h4 className="text-xl font-semibold">Incubation Center</h4>
            <p className="mt-2 text-[#848484]">
              Our incubation programs empower aspiring entrepreneurs with resources and guidance.
            </p>
            <p className='mt-2 text-[#848484]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, doloribus! Dolore voluptatem, repellendus nam culpa a dolorem nemo, optio rerum distinctio, libero explicabo! Quis, officia eaque necessitatibus quo impedit eius repellat ullam veniam laborum eum fuga modi tempora consequuntur amet.</p>

          </div>
        </div>
      </div>

      <h3 className="text-3xl font-semibold mt-6">Why Leadership Matters</h3>
      <p className="mt-4 text-lg text-[#848484]">
        Leadership is not just about holding power; it’s about inspiring and influencing meaningful change. At ILead Global Foundation, we emphasize integrity, resilience, and innovation in shaping the next generation of leaders. Our goal is to cultivate individuals who drive progress with a strong ethical foundation.
      </p>

      <h3 className="text-3xl font-semibold mt-6">Looking Ahead</h3>
      <p className="mt-4 text-lg text-[#848484]">
        As we expand our reach, we remain steadfast in our commitment to leadership development. Our future plans include launching new initiatives, forging strategic partnerships, and leveraging technology to enhance accessibility. By staying true to our values and continuously evolving, we aim to make a lasting impact in the field of leadership.
      </p>
    </div>
  );
}

export default About;
