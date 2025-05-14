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
  const [isResearchDropdownOpen, setIsResearchDropdownOpen] = useState(false);
  const [isInitiativesDropdownOpen, setIsInitiativesDropdownOpen] = useState(false);

  const closeAllDropdowns = () => {
    setIsResearchDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsInitiativesDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

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
              link.name === "Research" ? (
                <div key={link.url} className="relative group" 
                onMouseEnter={() => {
                  setIsResearchDropdownOpen(true);
                  setIsAboutDropdownOpen(false);
                  setIsInitiativesDropdownOpen(false);
                }}
                onMouseLeave={() => setIsResearchDropdownOpen(false)}
                >
                  <button
                    className="text-xl text-black hover:underline hover:underline-offset-[20px] decoration-[4px] decoration-[#2b5371] hover:text-blue-300"
                    onClick={() => {setIsResearchDropdownOpen(!isResearchDropdownOpen)
                      setIsAboutDropdownOpen(false)
                      setIsInitiativesDropdownOpen(false)
                    }
                  }
                  >
                    Research
                  </button>
                  {/* Dropdown Content */}
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isResearchDropdownOpen ? "opacity-100" : ""
                      }`}
                  >
                    <Link href="/research?type=expertspeak" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                      Expert Speak
                    </Link>
                    <Link href="/research?type=commentaries" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                      Commentaries

                    </Link>
                    <Link href="/research?type=youngvoice" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                      Young Voices

                    </Link>
                  </div>
                </div>
              ) :
                link.name === "About Us" ? (
                  <div key={link.url} className="relative group" 
                  onMouseEnter={() => {
                    setIsResearchDropdownOpen(false);
                    setIsAboutDropdownOpen(true);
                    setIsInitiativesDropdownOpen(false);
                  }}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <button
                      className="text-xl text-black hover:underline hover:underline-offset-[20px] decoration-[4px] decoration-[#2b5371] hover:text-blue-300"
                      onClick={() => {setIsAboutDropdownOpen(!isAboutDropdownOpen)
                        setIsResearchDropdownOpen(false)
                        setIsInitiativesDropdownOpen(false)
                      }}
                    >
                      About Us
                    </button>
                    {/* Dropdown Content */}
                    <div
                      className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isAboutDropdownOpen ? "opacity-100" : ""
                        }`}
                    >
                      <Link href="/about/components/trustees" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                      Trustees
                      </Link>
                      <Link href="/about/components/boardofdirectors" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                      Board of Directors

                      </Link>
                      <Link href="/about/components/internationaladvisoryboard" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                      International Advisory board
                      </Link>
                      <Link href="/about/components/academicteam" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                      Academics team
                      </Link>
                      <Link href="/about/components/visionandmission" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
Vision and Mission                      </Link>
                      {/* <Link href="/about/components/internationaladvisoryboard" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                      International Advisory board
                      </Link>
                      <Link href="/about/components/internationaladvisoryboard" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                      International Advisory board
                      </Link> */}
                    </div>
                  </div>
                ) :
                  link.name === "Initiatives" ? (
                    <div key={link.url} className="relative group"
                     onMouseEnter={() => {
                      setIsResearchDropdownOpen(false);
                      setIsAboutDropdownOpen(false);
                      setIsInitiativesDropdownOpen(true);
                    }}
                    onMouseLeave={() => setIsInitiativesDropdownOpen(false)}
                    >
                      <button
                        className="text-xl text-black hover:underline hover:underline-offset-[20px] decoration-[4px] decoration-[#2b5371] hover:text-blue-300"
                        onClick={() => {setIsInitiativesDropdownOpen(!isInitiativesDropdownOpen)
                          setIsAboutDropdownOpen(false)
                          setIsResearchDropdownOpen(false)
                        }}
                      >
                        Initiatives
                      </button>
                      {/* Dropdown Content */}
                      <div
                        className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isInitiativesDropdownOpen ? "opacity-100" : ""
                          }`}
                      >
                        <Link href="/initiatives?type=initiatives" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                          Initiatives
                        </Link>
                        <Link href="/initiatives?type=featured" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                          Featured
                        </Link>
                        <Link href="/initiatives?type=updated" onClick={closeAllDropdowns} className="block px-4 py-2 text-black hover:bg-gray-200">
                          All Updated
                        </Link>
                      </div>
                    </div>
                  ) :
                    (
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
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`text-white focus:outline-none z-50 ${isMobileMenuOpen ? "fixed top-5 right-5" : ""}`}>
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
            link.name === "Research" ? (
              <div key={link.url} className="flex flex-col items-left">
                <button
                  className="text-lg text-white text-left"
                  onClick={() => {setIsResearchDropdownOpen(!isResearchDropdownOpen)
                    setIsAboutDropdownOpen(false); setIsInitiativesDropdownOpen(false); 
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p>                 Research </p>

                    {isResearchDropdownOpen ?
                      <MdKeyboardArrowUp size={30} color="white" /> :
                      <MdKeyboardArrowDown size={30} color="white" />}
                  </div>
                </button>
                {/* Mobile Dropdown */}
                {isResearchDropdownOpen && (
                  <div className="flex flex-col gap-2 px-4 py-2">
                    <Link href="/research?type=expertspeak" className="text-lg text-white py-0 hover:underline" onClick={() => {
                      setIsResearchDropdownOpen(false);
                      setIsMobileMenuOpen(false)
                    }}>
                      Expert Speak
                    </Link>
                    <Link href="/research?type=commentaries" className="text-lg text-white py-0 hover:underline" onClick={() => {
                      setIsResearchDropdownOpen(false);
                      setIsMobileMenuOpen(false)
                    }}>
                      Commentaries
                    </Link>
                    <Link href="/research?type=youngvoice" className="text-lg text-white py-0 hover:underline" onClick={() => {
                      setIsResearchDropdownOpen(false);
                      setIsMobileMenuOpen(false)
                    }}>
                      Young Voices
                    </Link>
                  </div>
                )}
              </div>
            ) :
              link.name === "About Us" ? (
                <div key={link.url} className="flex flex-col items-left">
                  <button
                    className="text-lg text-white text-left"
                    onClick={() => {setIsAboutDropdownOpen(!isAboutDropdownOpen)
                      setIsResearchDropdownOpen(false); setIsInitiativesDropdownOpen(false);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <p>                  About Us </p>

                      {isAboutDropdownOpen ?
                        <MdKeyboardArrowUp size={30} color="white" /> :
                        <MdKeyboardArrowDown size={30} color="white" />}
                    </div>
                  </button>
                  {/* Mobile Dropdown */}
                  {isAboutDropdownOpen && (
                    <div className="flex flex-col gap-2 px-4 py-2">
                       <Link href="/about/components/trustees" onClick={() => {
                        setIsAboutDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }} className="block px-4 py-2 text-black hover:bg-gray-200">
                      Trustees
                      </Link>
                      <Link href="/about/components/boardofdirectors" onClick={() => {
                        setIsAboutDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }} className="block px-4 py-2 text-black hover:bg-gray-200">
                      Board of Directors

                      </Link>
                      <Link href="/about/components/internationaladvisoryboard" onClick={() => {
                        setIsAboutDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }} className="block px-4 py-2 text-black hover:bg-gray-200">
                      International Advisory board
                      </Link>
                      <Link href="/about/components/academicteam" onClick={() => {
                        setIsAboutDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }} className="block px-4 py-2 text-black hover:bg-gray-200">
                      Academics team
                      </Link>
                      <Link href="/about/components/visionandmission" onClick={() => {
                        setIsAboutDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }} className="block px-4 py-2 text-black hover:bg-gray-200">
Vision and Mission                      </Link>
                      {/* <Link href="/about/components/company" className="text-lg text-white py-0 hover:underline" onClick={() => {
                        setIsAboutDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}>
                        Company
                      </Link>
                      <Link href="/about/components/team" className="text-lg text-white py-0 hover:underline" onClick={() => {
                        setIsAboutDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}>
                        Team
                      </Link>
                      <Link href="/about/components/careers" className="text-lg text-white py-0 hover:underline" onClick={() => {
                        setIsAboutDropdownOpen(false)
                        setIsMobileMenuOpen(false)
                      }}>
                        Careers
                      </Link> */}
                    </div>
                  )}
                </div>
              ) :
                link.name === "Initiatives" ? (
                  <div key={link.url} className="flex flex-col items-left">
                    <button
                      className="text-lg text-white text-left"
                      onClick={() => {setIsInitiativesDropdownOpen(!isInitiativesDropdownOpen)
                        setIsAboutDropdownOpen(false); setIsResearchDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <p> Initiatives </p>

                        {isInitiativesDropdownOpen ?
                          <MdKeyboardArrowUp size={30} color="white" /> :
                          <MdKeyboardArrowDown size={30} color="white" />}
                      </div>
                    </button>
                    {/* Mobile Dropdown */}
                    {isInitiativesDropdownOpen && (
                      <div className="flex flex-col gap-2 px-4 py-2">
                        <Link href="/initiatives?type=initiatives" className="text-lg text-white py-0 hover:underline" onClick={() => {
                          setIsInitiativesDropdownOpen(false)
                          setIsMobileMenuOpen(false)
                        }}>
                          Initiatives
                        </Link>
                        <Link href="/initiatives?type=featured" className="text-lg text-white py-0 hover:underline" onClick={() => {
                          setIsInitiativesDropdownOpen(false)

                          setIsMobileMenuOpen(false)
                        }}>
                          Featured
                        </Link>
                        <Link href="/initiatives?type=updated" className="text-lg text-white py-0 hover:underline" onClick={() => {
                          setIsInitiativesDropdownOpen(false)
                          setIsMobileMenuOpen(false)
                        }}>
                          All Updated

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
