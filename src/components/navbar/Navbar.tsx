"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { links } from '@/dumby';
import Link from 'next/link';
import { MdKeyboardArrowRight, MdMenu, MdClose } from 'react-icons/md';
import Image from 'next/image';
import style from './logoimage.module.css';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarBgColor = ['/home', '/contact'].includes(pathname) ? 'bg-transparent' : 'bg-black';
  
  return (
    <nav className={`navbar flex items-center h-20 ${navbarBgColor} sticky z-50 w-full`}>
      <div className="navbar-container flex justify-between items-center sm:w-4/5 w-full mx-auto px-4">
        <div className="navbar-left flex items-center gap-10">
          <Link href="/home" className="flex items-center gap-3 text-4xl font-extrabold tracking-tight text-slate-900">
            <div className={`flex flex-col gap-6 w-full ${style.container}`}>
              <Image src={'/img/logotbg.png'} alt='background image' layout='fill' quality={100} className={style.logoimage} />  
            </div>   
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 ml-10">
          {links[0].links.map((link) => (
            <Link key={link.url} href={`/${link.url}`} className="text-xl text-white hover:underline hover:underline-offset-[28px] decoration-[4px] decoration-blue-700">
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex">
          <Link href="/contact" passHref>
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none">
              Contact us
              <MdKeyboardArrowRight className="text-white " size={30}/>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none z-50">
            {isMobileMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 shadow-lg">
            <Link href="/home" className="text-lg text-white py-2 hover:underline" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              Home 
            </Link>
          {links[0].links.map((link) => (
            <Link key={link.url} href={`/${link.url}`} className="text-lg text-white py-2 hover:underline" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {link.name}
            </Link>
          ))}
          <Link href="/contact" passHref>
            <button className="mt-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              Contact us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;