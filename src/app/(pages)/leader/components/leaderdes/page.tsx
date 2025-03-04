import React from 'react';
import Head from 'next/head';
interface LeaderdesProps {
}
const Leaderdes: React.FC<LeaderdesProps> = () => {
 

    return (
      <div className="p-10">
      <Head>
        <title>Our Leaders - ILead Global Foundation</title>
        <meta name="description" content="Meet the inspiring leaders of ILead Global Foundation who drive positive change." />
      </Head>

      <h1 className="text-5xl font-bold text-center">Our Leaders</h1>
      <p className="mt-6 text-lg">
        ILead Global Foundation is proud to have a team of visionary leaders who drive our mission forward. These individuals come from diverse backgrounds and bring their expertise, experience, and dedication to fostering leadership, innovation, and societal change. Our leaders are committed to mentoring, guiding, and empowering individuals to become future change-makers.
      </p>

      <h2 className="text-4xl font-semibold mt-6">Leadership Philosophy</h2>
      <p className="mt-4 text-lg">
        At ILead Global Foundation, leadership is more than just a position; it is a responsibility. We believe that great leaders inspire, motivate, and uplift others. Our leadership approach is based on three core principles:
      </p>
      <ul className="list-disc list-inside mt-4 text-lg">
        <li><strong>Integrity:</strong> Leading with honesty, transparency, and ethical decision-making.</li>
        <li><strong>Empowerment:</strong> Encouraging and supporting individuals to reach their highest potential.</li>
        <li><strong>Innovation:</strong> Embracing creativity and forward-thinking solutions for a better future.</li>
      </ul>
      
      <h2 className="text-4xl font-semibold mt-6">Meet Our Leaders</h2>
      <p className="mt-4 text-lg">
        Our leadership team comprises experts from various fields, including education, policy-making, social impact, business, and technology. They work collaboratively to shape the vision and direction of ILead Global Foundation.
      </p>
      
      <div className="mt-6">
        <h3 className="text-3xl font-semibold">John Doe - Founder & CEO</h3>
        <p className="mt-2 text-lg">
          John Doe is a visionary leader with a passion for social change. With over 20 years of experience in leadership development, he has pioneered various programs aimed at nurturing young leaders. His expertise in mentorship and strategic planning has been instrumental in the growth of ILead Global Foundation.
        </p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-3xl font-semibold">Jane Smith - Director of Leadership Programs</h3>
        <p className="mt-2 text-lg">
          Jane Smith specializes in leadership education and training. She has developed numerous mentorship programs that have empowered individuals across different sectors. Her efforts in creating inclusive leadership initiatives have made a significant impact in the community.
        </p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-3xl font-semibold">Michael Johnson - Head of Innovation & Research</h3>
        <p className="mt-2 text-lg">
          Michael Johnson is dedicated to fostering innovation in leadership. He leads research initiatives that explore new methodologies for developing future leaders. His work bridges the gap between technology and leadership, ensuring that young professionals have the tools they need to succeed.
        </p>
      </div>
      
      <h2 className="text-4xl font-semibold mt-6">The Role of Our Leaders</h2>
      <p className="mt-4 text-lg">
        Our leaders actively engage in mentoring, policy advocacy, and community outreach. They play a crucial role in shaping the direction of our programs and ensuring that our mission aligns with the evolving needs of society. Through their dedication, they inspire others to take on leadership roles and contribute meaningfully to global development.
      </p>

      <h2 className="text-4xl font-semibold mt-6">Join the Leadership Network</h2>
      <p className="mt-4 text-lg">
        We believe in fostering a global network of leaders. If you are passionate about leadership and social change, we invite you to join us. Whether as a mentor, advisor, or collaborator, your expertise can help shape the future of leadership development.
      </p>
    </div>
          );
        }
        
        export default Leaderdes