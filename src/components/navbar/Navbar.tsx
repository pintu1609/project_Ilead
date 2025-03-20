"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { links } from "@/dumby";
import Link from "next/link";
import { MdKeyboardArrowRight, MdMenu, MdClose, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";
import style from "./logoimage.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const navbarBgColor = ["/home", "/contact"].includes(pathname) ? "bg-transparent" : "bg-transparent";

  return (
    <nav className={`navbar flex items-center md:h-[9rem] h-[6rem] ${navbarBgColor} sticky z-50 w-full`}>
      <div className="flex sm:flex-col flex-row w-full justify-between">
        <div className="navbar-left flex items-center gap-10 sm:px-16">
          <Link href="/home" className="flex items-center gap-3 text-4xl font-extrabold tracking-tight text-slate-900">
            <div className={`flex flex-col gap-6 w-full ${style.container}`}>
              <Image src={"/img/logotbg.png"} alt="background image" layout="fill" quality={100} className={style.logoimage} />
            </div>
          </Link>
        </div>

        <div className="navbar-container flex sm:justify-between justify-end items-center w-full mx-auto px-4 sm:border sm:border-gray-200 py-2">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 ml-10">
            {links[0].links.map((link) =>
              link.name === "About Us" ? (
                <div key={link.url} className="relative group">
                  <button
                    className="text-xl text-black hover:underline hover:underline-offset-[20px] decoration-[4px] decoration-[#2b5371] hover:text-blue-300"
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  >
                    About Us
                  </button>
                  {/* Dropdown Content */}
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isAboutDropdownOpen ? "opacity-100" : ""
                    }`}
                  >
                    <Link href="/about/components/company" className="block px-4 py-2 text-black hover:bg-gray-200">
                      Company
                    </Link>
                    <Link href="/about/components/team" className="block px-4 py-2 text-black hover:bg-gray-200">
                      Team
                    </Link>
                    <Link href="/about/components/careers" className="block px-4 py-2 text-black hover:bg-gray-200">
                      Careers
                    </Link>
                  </div>
                </div>
              ) : (
                <Link key={link.url} href={`/${link.url}`} className="text-xl text-black hover:underline hover:underline-offset-[20px] decoration-[4px] decoration-[#2b5371] hover:text-blue-300">
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex">
            <Link href="/contact" passHref>
              <button className="flex items-center gap-2 px-4 py-2 text-white bg-[#0169a7] rounded hover:bg-[#2b5371] focus:outline-none">
                Contact us
                <MdKeyboardArrowRight className="text-white" size={30} />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`text-white focus:outline-none z-50 ${isMobileMenuOpen ?"fixed top-5 right-5" : ""}`}>
              {isMobileMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} color="black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-[#0169a7] flex flex-col items-left gap-4 py-4 shadow-lg px-4 pt-8">
          <Link href="/home" className="text-lg text-white  hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          {links[0].links.map((link) =>
            link.name === "About Us" ? (
              <div key={link.url} className="flex flex-col items-left">
                <button
                  className="text-lg text-white text-left"
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                >
                  <div className="flex items-center justify-between">
                   <p>                  About Us </p>

                   {isAboutDropdownOpen ?
                   <MdKeyboardArrowUp size={30} color="white" />:
                    <MdKeyboardArrowDown size={30} color="white" />}
                  </div>
                </button>
                {/* Mobile Dropdown */}
                {isAboutDropdownOpen && (
                  <div className="flex flex-col gap-2 px-4 py-2">
                    <Link href="/about/components/company" className="text-lg text-white py-0 hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                      Company
                    </Link>
                    <Link href="/about/components/team" className="text-lg text-white py-0 hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                      Team
                    </Link>
                    <Link href="/about/components/careers" className="text-lg text-white py-0 hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                      Careers
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.url} href={`/${link.url}`} className="text-lg text-white py-0 hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            )
          )}
          <Link href="/contact" passHref>
            <button className="mt-0 px-0 py-0 text-white text-lg bg-none rounded hover:bg-none focus:outline-none" onClick={() => setIsMobileMenuOpen(false)}>
              Contact us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
