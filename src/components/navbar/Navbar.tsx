"use client";
import { usePathname } from 'next/navigation';
import { links } from '@/dumby';
import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';
import style from './logoimage.module.css'


interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
  const pathname = usePathname()


  

  const navbarBgColor = ['/home', '/contact'].includes(pathname) ? 'bg-transparent' : 'bg-black';
  console.log("🚀 ~ navbarBgColor:", navbarBgColor)


  return (
    <nav className={`navbar flex items-center h-20 ${navbarBgColor} sticky z-50`}>
  <div className="navbar-container flex justify-between items-center w-4/5 mx-auto px-4">
    <div className="navbar-left flex items-center gap-10">
      <Link href="/home" className="flex items-center gap-3 text-4xl font-extrabold tracking-tight text-slate-900">
      <div className={`flex flex-col gap-6 w-full ${style.container}`}>

      <Image src={'/img/logotbg.png'}
        alt='background image'
        layout='fill'
        // objectFit='cover'
        quality={100}
        className={style.logoimage}
      />  
      </div>   
           {/* <span className="text-white">NoiTek</span> */}
      </Link>
   

    <div className="navbar-right flex gap-10 ml-10">
      {links[0].links.map((link) => (
        <Link key={link.url} href={`/${link.url}`} className="text-xl text-white hover:underline hover:underline-offset-[28px] decoration-[4px] decoration-blue-700">
          {link.name}
        </Link>
      ))}
    </div>
    </div>

    <div>
    <Link href="/contact" passHref>
      <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:none">
        Contact us
        <MdKeyboardArrowRight className="text-white " size={30}/>
      </button>
    </Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
