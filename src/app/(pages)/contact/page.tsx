import React from 'react';
import style from './contactimage.module.css'
import Image from 'next/image';
import ContactSale from './components/contactSale/page';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

interface ContactProps {
}
const Contact: React.FC<ContactProps> = () => {


  return (
    <div className='flex md:flex-row flex-col w-full bg-[#2b5371] my-4' >
      <div className='flex flex-col gap-6 md:w-1/3 w-full md:px-8 px-4'>
      <div className='flex flex-row gap-4 items-center justify-center mt-16 mb-8'>
        <h2 className="text-4xl font-semibold text-left">Connect with us</h2>
        <div className='h-[2px] w-16 bg-[#FFC107]'>

        </div>

        </div>

        <div className="flex justify-center lg:justify-start space-x-4 my-4">
                    <a 
                      // href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${blog.title}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 bg-transparent text-white hover:bg-[#0169a7] transition border border-[2px] border-[#2f5775] flex flex-col items-center"
                    >
                      <FaTwitter size={40} color="white" />
                      <p>Twitter</p>
                    </a>
                    <a 
                      // href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 bg-transparent text-white hover:bg-[#0169a7] transition border border-[2px] border-[#2f5775] flex flex-col items-center"
                    >
                      <FaLinkedin size={40} color="white" />
                      <p>Linkedin</p>
                    </a>
                    <a 
                      // href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-transparent text-white hover:bg-[#0169a7] transition border border-[2px] border-[#2f5775] flex flex-col items-center" 
                    >
                      <FaFacebook size={40} color="white"  />
                      <p>Facebook</p>
                    </a>
                  </div>
      </div>
   
<div className='flex flex-col gap-6 md:w-2/3 w-full '>
  <div className='flex justify-center bg-white m-10'>
<ContactSale/>

  </div>
</div>
    </div>

  )
}

export default Contact