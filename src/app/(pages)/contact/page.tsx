import React from 'react';
import style from './contactimage.module.css'
import Image from 'next/image';
import ContactSale from './components/contactSale/page';
interface ContactProps {
}
const Contact: React.FC<ContactProps> = () => {


  return (
    <div className='flex flex-col w-full mt-[-80px]' >
    <div className={`flex flex-col gap-6 w-full ${style.container}`}>
      <Image src={'/img/contact.jpg'}
        alt='background image'
        layout='fill'
        objectFit='cover'
        quality={100}
        className={style.backgroundImages} />
      <div className='flex flex-col gap-6 w-1/4 z-10 ml-40 mt-40'>
        <h3 className='text-4xl text-white'>CONTACT US</h3>
        <p className='text-xl text-white'>Connect with a MAXHUB expert and get the best solution tailored to your unique requirements.</p>
        </div>

    </div>
<div className='flex flex-col gap-6 w-full bg-[#f5f5f5] '>
  <div className='flex justify-center'>
<ContactSale/>

  </div>
</div>
    </div>

  )
}

export default Contact