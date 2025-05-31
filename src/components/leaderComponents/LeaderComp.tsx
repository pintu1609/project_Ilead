  "use client"
  "use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
// import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


import AOS from "aos";
import "aos/dist/aos.css";
import { leadersItem } from "@/dumby/leaders";

interface leadersItem {
  name: string;
  role: string;
  id: string;
  image: string;
  alt: string;
  slug: string;
}



export default function LeaderComp({ leader }: { leader: leadersItem }) {
 


  

  return (
  
            <div className="col-lg-4 col-md-6 team" key={leader.id}>
              <div className="member relative">
                <div className="pic overflow-hidden mb-12">
                  <Image
                    src={leader.image}
                    alt={leader.alt}
                    width={400}
                    height={300}
                    className="img-fluid h-[300px] object-fill"
                  />
                </div>
                <div className="member-info absolute bottom-[-80px] left-10 right-5 bg-white text-[color-mix(in srgb,#444444,transparent%2020%)] shadow-[0px_2px_15px_rgba(0,_0,_0,_0.1)] p-5 overflow-hidden transition-all duration-500 w-4/5">
                  <h4 className="font-bold text-lg relative text-[#040677]">{leader.name}</h4>
                  <hr className="border-[color-mix(in srgb,#444444,transparent%2020%)] my-2 h-[4px] w-1/5" />
                  <div className="flex justify-between items-center h-[3.5rem]">
                                <span className="italic text-sm  flex items-center line-clamp-2">
{leader.role}</span>
                    
                  </div>
                </div>
              </div>
            </div>
  );
}