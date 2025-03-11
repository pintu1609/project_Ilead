import Image from 'next/image';
import React from 'react';
import style from './initiativesimage.module.css'
import Initiativesdes from './components/initiativedes/page';
interface InitiativesProps {
}
const Initiatives: React.FC<InitiativesProps> = () => {
 

    return (
        <div className=" bg-[#f5f5f5]">
             <div className={`flex flex-col gap-6 w-full ${style.container}`}>

<Image src={'/img/ourinitiative.png'}
  alt='background image'
  layout='fill'
  // objectFit='cover'
  quality={100}
  className={style.logoimage}
/>  
        </div> 
        <div className="">
          <Initiativesdes/>
          </div>
      
        </div>
      );
}

export default Initiatives