import Image from 'next/image';
import React from 'react';
import style from './initiativesimage.module.css'
interface InitiativesProps {
}
const Initiatives: React.FC<InitiativesProps> = () => {
 

    return (
        <div className="">
             <div className={`flex flex-col gap-6 w-full ${style.container}`}>

<Image src={'/img/ourinitiative.png'}
  alt='background image'
  layout='fill'
  // objectFit='cover'
  quality={100}
  className={style.logoimage}
/>  
</div> 
<div className="p-10">

          <h2 className="text-3xl font-bold">Our Initiatives</h2>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold">Celebrating New India</h3>
            <p>
              A transformative program fostering dialogue, embracing diversity, and empowering change through meaningful
              exchanges and policy influence.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold">ILead Women</h3>
            <p>
              Breaking barriers and fostering leadership by providing mentorship, resources, and support to empower women.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold">Rising Leaders</h3>
            <p>
              Training and empowering young individuals to build leadership skills and make a positive impact in society.
            </p>
          </div>
        </div>
        </div>
      );
}

export default Initiatives