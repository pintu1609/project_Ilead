import React from 'react';
import Homedetails from './components/homedetails/page';
import Image from 'next/image';
import style from './homeimage.module.css'
interface HomeProps {
}
const Home: React.FC<HomeProps> = () => {
 

return(
  <div className='flex flex-col w-full  mt-[-80px]'>
     <div className={`flex flex-col gap-6 w-full ${style.container}`}>

<Image src={'/img/home.png'}
  alt='background image'
  layout='fill'
  // objectFit='cover'
  quality={100}
  className={style.logoimage}
/>  
</div> 
  <Homedetails/>
</div>
   
)
}

export default Home