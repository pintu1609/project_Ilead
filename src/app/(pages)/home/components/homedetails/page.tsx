import Head from 'next/head';
import React from 'react';

interface HomedetailsProps {
}
const Homedetails: React.FC<HomedetailsProps> = () => {
 

return(
  <div className="sm:p-10 p-2">
  <Head>
    <title>Home - ILead Global Foundation</title>
    <meta name="description" content="Welcome to ILead Global Foundation, empowering leaders for a better tomorrow." />
  </Head>

  <h1 className="sm:text-5xl text-4xl font-bold text-center">Welcome to ILead Global Foundation</h1>
  <p className="mt-6 text-lg">
    ILead Global Foundation is dedicated to shaping the future by nurturing, developing, and empowering individuals to become visionary leaders. Since our establishment in 2019, we have provided advanced mentorship programs that create a profound impact on society. Our platform is designed to equip scholars, entrepreneurs, and political leaders with the skills and resources they need to thrive in a rapidly evolving world.
  </p>

  <h2 className="text-4xl font-semibold mt-6">Who We Are</h2>
  <p className="mt-4 text-lg">
    We are a non-profit organization committed to leadership development and innovation. Our foundation operates on the principle that leadership is not just about authority but about influencing positive change. Through our initiatives, we empower individuals to become agents of transformation in their respective fields.
  </p>

  <h2 className="text-4xl font-semibold mt-6">Our Core Philosophy</h2>
  <p className="mt-4 text-lg">
    Our philosophy revolves around three pillars: Connect, Nurture, and Develop. We believe that by connecting individuals with mentors, nurturing their talents, and developing their skills, we can shape a new generation of leaders who will drive progress and change.
  </p>
  <ul className="list-disc list-inside mt-4 text-lg">
    <li><strong>Connect:</strong> Bringing together passionate individuals, experts, and thought leaders to foster innovation.</li>
    <li><strong>Nurture:</strong> Providing comprehensive training, mentorship, and networking opportunities.</li>
    <li><strong>Develop:</strong> Equipping future leaders with the confidence and skills needed to make a tangible impact.</li>
  </ul>

  <h2 className="text-4xl font-semibold mt-6">Our Impact</h2>
  <p className="mt-4 text-lg">
    Over the years, ILead Global Foundation has transformed the lives of countless individuals. Our impact is reflected in the success stories of scholars, entrepreneurs, and policymakers who have emerged as leaders in their respective domains. By fostering discussions, providing educational resources, and hosting global leadership programs, we continue to expand our influence worldwide.
  </p>

  <h2 className="text-4xl font-semibold mt-6">Our Initiatives</h2>
  <p className="mt-4 text-lg">
    To create sustainable and long-lasting leadership development, we have introduced several key initiatives:
  </p>
  <ul className="list-disc list-inside mt-4 text-lg">
    <li><strong>Celebrating New India:</strong> A program that fosters dialogue, promotes inclusivity, and empowers individuals to drive societal change.</li>
    <li><strong>ILead Women:</strong> An initiative dedicated to breaking barriers and fostering leadership among women.</li>
    <li><strong>Rising Leaders:</strong> A leadership training program designed to mentor and equip young professionals with essential skills.</li>
  </ul>

  <h2 className="text-4xl font-semibold mt-6">Why Leadership Matters</h2>
  <p className="mt-4 text-lg">
    In today’s fast-paced and interconnected world, effective leadership is more important than ever. It is the driving force behind innovation, economic development, and social progress. At ILead Global Foundation, we believe that leadership is about making a difference, inspiring others, and fostering a culture of collaboration.
  </p>

  <h2 className="text-4xl font-semibold mt-6">Join Us</h2>
  <p className="mt-4 text-lg">
    We invite you to be a part of this transformative journey. Whether you are an aspiring leader, mentor, or supporter, there are numerous ways to engage with ILead Global Foundation. Join our programs, attend our events, or contribute to our mission by supporting leadership development initiatives.
  </p>

  <h2 className="text-4xl font-semibold mt-6">Looking Forward</h2>
  <p className="mt-4 text-lg">
    As we move ahead, we remain committed to our goal of shaping the leaders of tomorrow. Our vision for the future includes expanding our reach, launching new leadership programs, and fostering global collaborations to ensure that leadership development remains at the forefront of societal progress.
  </p>
</div>
   
)
}

export default Homedetails