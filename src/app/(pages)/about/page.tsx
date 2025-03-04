import React from 'react';

interface AboutProps {
}
const About: React.FC<AboutProps> = () => {
 
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="mt-4">
        ILead Global Foundation has been functioning since 2019. We aspire to provide pioneering and advanced mentoring
        to develop integrated leaders and help individuals achieve their goals in a competitive world.
      </p>
      <p className="mt-2">Our approach: Connect, Nurture, and Develop.</p>
    </div>
  );
}

export default About