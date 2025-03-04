import Image from 'next/image';
import React from 'react';
import style from './leaderimage.module.css'
interface LeaderProps {
}
const Leader: React.FC<LeaderProps> = () => {
 

return (
    <div className="">
         <div className={`flex flex-col gap-6 w-full ${style.container}`}>

<Image src={'/img/ourleader.png'}
  alt='background image'
  layout='fill'
  // objectFit='cover'
  quality={100}
  className={style.logoimage}
/>  
</div> 
<div className="p-10">
      <h2 className="text-3xl font-bold">Our Leaders</h2>
      <p className="mt-4">Meet the inspiring individuals driving change through leadership and innovation.</p>
      {/* Add leader profiles here */}
    </div>
    </div>
  );
}

export default Leader