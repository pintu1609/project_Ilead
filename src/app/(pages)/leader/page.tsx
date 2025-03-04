import Image from 'next/image';
import React from 'react';
import style from './leaderimage.module.css'
import Leaderdes from './components/leaderdes/page';
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
<div >
     <Leaderdes/>
    </div>
    </div>
  );
}

export default Leader