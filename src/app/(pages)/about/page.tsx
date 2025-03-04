import Head from 'next/head';
import React from 'react';

interface AboutProps {
}
const About: React.FC<AboutProps> = () => {
 
  return (
    <div className="sm:p-10 p-2">
      <Head>
        <title>About Us - ILead Global Foundation</title>
        <meta name="description" content="Learn more about ILead Global Foundation, our mission, vision, and impact." />
      </Head>

      <h2 className="text-4xl font-bold text-center">About Us</h2>
      <p className="mt-6 text-lg">
        ILead Global Foundation has been functioning since 2019 with a vision to nurture, develop, and empower leaders across diverse fields. Our organization believes in equipping individuals with the knowledge, skills, and resources needed to create a lasting impact on society. With a core philosophy centered around mentorship, innovation, and inclusivity, ILead Global Foundation has been at the forefront of leadership development and social transformation.
      </p>
      
      <h3 className="text-3xl font-semibold mt-6">Our Mission</h3>
      <p className="mt-4 text-lg">
        Our mission is to provide pioneering and advanced mentoring to develop integrated leaders who can navigate the challenges of the modern world. We strive to create a platform where individuals from different walks of life can come together to share ideas, foster innovation, and contribute meaningfully to society. By focusing on holistic development, we aim to bridge gaps in leadership and ensure a brighter, more inclusive future.
      </p>
      
      <h3 className="text-3xl font-semibold mt-6">Our Vision</h3>
      <p className="mt-4 text-lg">
        At ILead Global Foundation, we envision a world where every individual has access to the guidance, mentorship, and opportunities they need to excel in their respective domains. We believe in fostering an ecosystem of collaboration, continuous learning, and empowerment. Our vision is not just about producing leaders but about nurturing responsible, ethical, and innovative individuals who can drive progress in society.
      </p>
      
      <h3 className="text-3xl font-semibold mt-6">Our Approach: Connect, Nurture, Develop</h3>
      <p className="mt-4 text-lg">
        Our approach is centered around three key pillars: Connect, Nurture, and Develop.
      </p>
      <ul className="list-disc list-inside mt-4 text-lg">
        <li><strong>Connect:</strong> Bringing together aspiring leaders, mentors, and experts from diverse fields to facilitate meaningful interactions and collaborations.</li>
        <li><strong>Nurture:</strong> Providing continuous mentorship, resources, and guidance to help individuals grow personally and professionally.</li>
        <li><strong>Develop:</strong> Equipping individuals with the necessary skills, experiences, and knowledge to excel in their chosen fields and contribute to societal progress.</li>
      </ul>
      
      <h3 className="text-3xl font-semibold mt-6">Impact and Achievements</h3>
      <p className="mt-4 text-lg">
        Since our inception, ILead Global Foundation has impacted thousands of individuals through our programs and initiatives. Some of our notable contributions include:
      </p>
      <ul className="list-disc list-inside mt-4 text-lg">
        <li>Empowering young scholars, political leaders, and entrepreneurs through structured leadership programs.</li>
        <li>Facilitating national and international dialogues on progressive policymaking and societal transformation.</li>
        <li>Launching programs such as Celebrating New India, ILead Women, and Rising Leaders to address specific societal needs.</li>
        <li>Providing mentorship opportunities that have transformed the careers of many emerging leaders.</li>
      </ul>
      
      <h3 className="text-3xl font-semibold mt-6">Why Leadership Matters</h3>
      <p className="mt-4 text-lg">
        Leadership plays a crucial role in shaping the future of societies, organizations, and nations. At ILead Global Foundation, we recognize that leadership is not just about holding a position of power but about influencing positive change. Through our programs, we aim to instill values of integrity, resilience, and innovation in the leaders of tomorrow.
      </p>
      
      <h3 className="text-3xl font-semibold mt-6">Looking Ahead</h3>
      <p className="mt-4 text-lg">
        As we continue to grow, we remain committed to our mission of fostering leadership and societal change. Our future plans include expanding our initiatives, forming new partnerships, and leveraging technology to reach a wider audience. By staying true to our core values and continuously evolving, we aim to leave a lasting legacy in the field of leadership development.
      </p>
    </div>
  );
}

export default About