"use client";
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { BeatLoader } from 'react-spinners';
import { set } from 'zod';
const Footer = () => {

    const [email, setEmail] = useState('');
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [loading, setLoading] = useState(false);

    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isResearchDropdownOpen, setIsResearchDropdownOpen] = useState(false);
    const [isInitiativesDropdownOpen, setIsInitiativesDropdownOpen] = useState(false);



    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        // Simple email validation
        setIsEmailInvalid(!/\S+@\S+\.\S+/.test(e.target.value));
    };

    const handleSubmit = async () => {
        // Here you would handle form submission
        if (isEmailInvalid || email.trim() === '') {
            setIsEmailInvalid(true);
        } else {
            setLoading(true);
            setIsEmailInvalid(false);

            const response = await fetch('/api/googleSheetMarketingEmail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            console.log("🚀 ~ handleSubmit ~ response:", response)

            if (!response.ok) {
                console.error('Error adding email to Google Sheets');
            }

            setEmail('');
            setLoading(false);

        }
    };

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <footer className="bg-[#1c1c1d] text-white relative bottom-0 ">
            <div className="container mx-auto flex flex-col items-center px-4 sm:w-4/5 w-full py-6 ">
                <p className="text-4xl mb-2 py-16 text-center">GET CONNECT WITH US</p>
                <div className="flex gap-4">
                    <Link href="https://www.facebook.com" passHref className='bg-white p-1 rounded rounded-full hover:bg-blue-500'>
                        <React.Fragment>
                            <span className="text-[#1c1c1d] hover:text-white">
                                <FaFacebookF size={24} />
                            </span>
                        </React.Fragment>
                    </Link>
                    <Link href="https://twitter.com" passHref className='bg-white p-1 rounded rounded-full hover:bg-blue-500'>
                        <React.Fragment>

                            <span className="text-[#1c1c1d] hover:text-white">
                                <FaTwitter size={24} />
                            </span>
                        </React.Fragment>

                    </Link>
                    <Link href="https://www.instagram.com" passHref className='bg-white p-1 rounded rounded-full hover:bg-blue-500'>
                        <React.Fragment>

                            <span className="text-[#1c1c1d] hover:text-white">
                                <FaInstagram size={24} />
                            </span>
                        </React.Fragment>

                    </Link>
                    <Link href="https://www.linkedin.com" passHref className='bg-white p-1 rounded rounded-full hover:bg-blue-500'>
                        <React.Fragment>

                            <span className="text-[#1c1c1d] hover:text-white">
                                <FaLinkedinIn size={24} />
                            </span>
                        </React.Fragment>

                    </Link>

                    <Link href="mailto:your-email@example.com" passHref className='bg-white p-1 rounded rounded-full hover:bg-blue-500'>
                        <React.Fragment>

                            <span className="text-[#1c1c1d] hover:text-white">
                                <FaEnvelope size={24} />
                            </span>
                        </React.Fragment>

                    </Link>
                </div>

                <div className='h-[1px] w-full bg-white my-10'></div>

                <div className='sm:flex sm:flex-row  flex flex-col  sm:justify-between align-center w-full  sm:gap-0  gap-8'>
                    <div className='flex gap-4 flex-col sm:w-1/4 w-full'>
                        <h3 className='text-white text-lg'>Company</h3>
                        <div className='flex gap-10'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col'>
                                    <div className='flex gap-2 items-center' onClick={() => {
                                        setIsResearchDropdownOpen(!isResearchDropdownOpen)
                                        setIsAboutDropdownOpen(false)
                                        setIsInitiativesDropdownOpen(false)

                                    }}>

                                        <p className=' text-[#5e5e5e] text-sm hover:text-white' >Research</p>
                                        {isResearchDropdownOpen ?
                                            <MdKeyboardArrowUp size={20} color="#5e5e5e" /> :
                                            <MdKeyboardArrowDown size={20} color="#5e5e5e" />}
                                    </div>
                                    <div>
                                        {isResearchDropdownOpen && (
                                            <div className="flex flex-col gap-2 px-4 py-2">
                                                <Link href="/research?type=expertspeak" className="text-[#5e5e5e] text-sm  py-0 hover:underline" onClick={() => {
                                                    setIsResearchDropdownOpen(false);
                                                }}>
                                                    Expert Speak
                                                </Link>
                                                <Link href="/research?type=commentaries" className="text-[#5e5e5e] text-sm  py-0 hover:underline" onClick={() => {
                                                    setIsResearchDropdownOpen(false);
                                                }}>
                                                    Commentaries
                                                </Link>
                                                <Link href="/research?type=youngvoice" className="text-[#5e5e5e] text-sm  py-0 hover:underline" onClick={() => {
                                                    setIsResearchDropdownOpen(false);
                                                }}>
                                                    Young Voices
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex gap-2 items-center' onClick={() => {
                                        setIsInitiativesDropdownOpen(!isInitiativesDropdownOpen)
                                        setIsAboutDropdownOpen(false)
                                        setIsResearchDropdownOpen(false)
                                    }}>
                                        <p className=' text-[#5e5e5e] text-sm hover:text-white'
                                        >Initiatives</p>
                                        {isInitiativesDropdownOpen ?
                                            <MdKeyboardArrowUp size={20} color="#5e5e5e" /> :
                                            <MdKeyboardArrowDown size={20} color="#5e5e5e" />}

                                    </div>

                                    <div>
                                        {isInitiativesDropdownOpen && (
                                            <div className="flex flex-col gap-2 px-4 py-2">
                                                <Link href="/initiatives?type=initiatives" className="text-[#5e5e5e] text-sm py-0 hover:underline" onClick={() => {
                                                    setIsInitiativesDropdownOpen(false)
                                                }}>
                                                    Initiatives
                                                </Link>
                                                <Link href="/initiatives?type=featured" className="text-[#5e5e5e] text-sm py-0 hover:underline" onClick={() => {
                                                    setIsInitiativesDropdownOpen(false)

                                                }}>
                                                    Featured
                                                </Link>
                                                <Link href="/initiatives?type=updated" className="text-[#5e5e5e] text-sm py-0 hover:underline" onClick={() => {
                                                    setIsInitiativesDropdownOpen(false)
                                                }}>
                                                    All Updated

                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                </div>




                                <Link href="/contact" passHref>

                                    <p className='text-[#5e5e5e] text-sm hover:text-white'>Contact US</p>
                                </Link>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col'>
                                <div className='flex gap-2 items-center' onClick={() => {
                                    setIsAboutDropdownOpen(!isAboutDropdownOpen)
                                    setIsInitiativesDropdownOpen(false)
                                    setIsResearchDropdownOpen(false)
                                }}>
                                    <p className=' text-[#5e5e5e] text-sm hover:text-white' >About</p>
                                    {isAboutDropdownOpen ?
                                        <MdKeyboardArrowUp size={20} color="#5e5e5e" /> :
                                        <MdKeyboardArrowDown size={20} color="#5e5e5e" />}
                                </div>
                                <div>
                                {isAboutDropdownOpen && (
                    <div className="flex flex-col gap-2 px-4 py-2">
                      <Link href="/about/components/company" className="text-sm text-[#5e5e5e] py-0 hover:underline" onClick={() => {
                        setIsAboutDropdownOpen(false)
                      }}>
                        Company
                      </Link>
                      <Link href="/about/components/team" className="text-sm text-[#5e5e5e] py-0 hover:underline" onClick={() => {
                        setIsAboutDropdownOpen(false)
                      }}>
                        Team
                      </Link>
                      <Link href="/about/components/careers" className="text-sm text-[#5e5e5e] py-0 hover:underline" onClick={() => {
                        setIsAboutDropdownOpen(false)
                      }}>
                        Careers
                      </Link>
                    </div>
                  )}
                                    </div>

                                </div>
                                

                                <Link href="/leader" passHref>

                                    <p className=' text-[#5e5e5e] text-sm hover:text-white' >Leader</p>
                                </Link>
                                {/* <Link href="/blog" passHref>

                        <p className=' text-[#5e5e5e] text-sm hover:text-white' >Blog</p>
                        </Link> */}

                                {/* <Link href="/contact" passHref>

                            <p className='text-[#5e5e5e] text-sm hover:text-white'>Contact US</p>
                          </Link> */}
                            </div>
                        </div>

                    </div>

                    <div className='flex gap-6 flex-col sm:w-1/3 w-full'>
                        <div className='flex'>
                            <input type="email" placeholder="Enter your E-mail Address"
                                value={email}
                                onChange={handleEmailChange}
                                className={`bg-transparent flex-grow p-2  pl-4 rounded-tl-lg rounded-bl-lg border border-white  focus:outline-none focus:none  text-[#5e5e5e] text-sm  ${isEmailInvalid ? 'placeholder:text-red-500' : 'placeholder:text-[#5e5e5e]'} placeholder:text-sm`}

                            />
                            <button
                                onClick={handleSubmit}
                                className={`bg-white ${isEmailInvalid ? 'text-red-500' : 'text-[#5e5e5e]'} rounded-tr-lg rounded-br-lg px-4 py-3`}>
                                {loading ?
                                    <BeatLoader color="#5e5e5e" size={10} /> :
                                    "Submit"
                                } </button>


                        </div>


                        <p className='text-[#5e5e5e] text-sm'>Sign up to receive Ilead marketing emails. You can modify your subscription or unsubscribe at any time.</p>
                    </div>
                    <div className='flex flex-col gap-2 sm:w-1/4 w-full'>
                        <p className='text-[#5e5e5e] text-sm'>Address: C-245, 1st Floor, Defence Colony, New Delhi 110024</p>
                        <p className='text-[#5e5e5e] text-sm'>Phone: +011-35688106</p>
                    </div>

                </div>

            </div>
            <div className='bg-[#333333] py-2 mx-auto w-full bottom-0 mt-10'>
                <p className='text-[#5e5e5e] text-lg text-center'>© 2024 Ilead. All Rights Reserved.</p>
            </div>
            <button
                onClick={scrollToTop}
                className="absolute top-[-30px] right-4 bg-blue-500 p-2 rounded-full text-white shadow-lg hover:bg-blue-600 transition-colors z-50"
                aria-label="Scroll to top"
            >
                {/* <FaArrowUp size={20} /> */}
                <MdKeyboardArrowUp className="text-white " size={40} />

            </button>

        </footer>
    );
};

export default Footer;
