



"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import client from "../../../../../sanityClient";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
import Link from "next/link";
// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

interface flagshipinitativesitem {
    id: number;
    title: string;
    image: string;
    alt: string;
    shortText: string;
    longText: string;
    additionalText: string;
    slug: string;
}

export default function FlagshipInitiatives() {
  const { slug } = useParams();
  console.log("🚀 ~ BlogDetails ~ slug:", slug)
  const [flagshipinitatives, setFlagshipinitatives] = useState<flagshipinitativesitem | null>(null);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!slug) return;

    async function fetchBlog() {
      try {
        const data = await client.fetch(
          ` *[_type == "initiative" && slug.current == $slug][0] {
            _id,
            title,
            shortText,
            longText,
            additionalText,
            alt,
            "image": image.asset->url,
            "slug": slug.current
          
          }`,
          { slug }
        );
        console.log("🚀 ~ fetchBlog ~ data:", data);
        setFlagshipinitatives(data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    }
    fetchBlog();
  }, [slug]);

  // useEffect(() => {
  //   if (!blog?.image || blog.image.length <= 1) return;

  //     const interval = setInterval(() => {  
  //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % blog.image.length);
  //     }, 5000);

  //     return () => clearInterval(interval);
    
  // }, [blog]);

  if (!flagshipinitatives) return <div className="text-center p-10 h-[90vh] flex items-center justify-center">
 <ClipLoader
        color="#000000"
        // loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> 
       </div>;

  return (
    <div className="my-10">
        <h1 className="text-4xl font-bold text-center text-[#040677] lg:text-center">{flagshipinitatives?.title}</h1>
    <div className="mx-auto lg:mx-10 p-6 flex flex-col lg:flex-row gap-10  item-center justify-center">
      {/* Blog Content Section (4 parts) */}
      <div className="w-full lg:w-3/4">
       {/* <p className="text-gray-600 text-center lg:text-left my-4 text-xl">
  <span className="block lg:hidden">
    By {blog.author.length > 10 ? blog.author.slice(0, 10) + "..." : blog.author}
  </span>
  <span className="hidden lg:inline">
    By {blog.author}
  </span>{" "}
  | {new Date(blog.date).toDateString()}
</p> */}


        {/* Blog Image */}
        <div className="mt-6 relative w-full h-96">
          {/* {blog.image.length > 1 && blog.image[currentImageIndex]?.asset?.url && ( */}
          <Image
            // src={blog?.image[currentImageIndex]?.asset?.url}
            src={flagshipinitatives.image}
            // alt={`Blog Image ${currentImageIndex + 1}`}
            alt={flagshipinitatives.alt}
            fill
            style={{ objectFit: "fill" }}
            className="rounded-lg shadow-lg"
          />
          
        {/* )} */}
        </div>
        {/* Blog Description */}
        <div className="mt-6 text-lg text-gray-700 leading-relaxed text-justify flex flex-col gap-4">
          <h2 className="text-2xl">{flagshipinitatives.shortText}</h2>
          <p className="text-lg">{flagshipinitatives.longText}</p>
          <p className="text-lg">{flagshipinitatives.additionalText}</p>
            {/* <PortableText 
              value={flagshipinitatives.longText as unknown as TypedObject[]} 
              components={{
                block: {
                  h1: ({ children }) => <h1 className="lg:text-2xl text-xl font-semibold my-5">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-lg  lg:text-xl font-semibold my-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-sm lg:text-lg font-semibold my-3">{children}</h3>,
                }
              }}
            /> */}

            {/* <PortableText 
              value={flagshipinitatives.additionalText as unknown as TypedObject[]} 
              components={{
                block: {
                  h1: ({ children }) => <h1 className="lg:text-2xl text-xl font-semibold my-5">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-lg  lg:text-xl font-semibold my-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-sm lg:text-lg font-semibold my-3">{children}</h3>,
                }
              }}
            /> */}
          </div>
      </div>

      {/* Author Info Section (1 part) */}
      {/* <div className="w-full lg:w-1/4 lg:mt-16">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
          <div className="relative w-32 h-32 mx-auto">
            <Image
              src={blog.authorImage || "/default-avatar.png"}
              alt={blog.author}
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>
          <h3 className="text-2xl font-semibold mt-4">{blog.author}</h3>
          <div className="flex justify-center ">
          <div className="flex justify-center lg:justify-start space-x-4 my-4">
            <a 
              // href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${blog.title}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white text-white hover:bg-blue-600 transition"
            >
              <FaTwitter size={20} color="black" />
            </a>
            <a 
              // href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white text-white hover:bg-blue-800 transition"
            >
              <FaLinkedin size={20} color="black" />
            </a>
            <a 
              // href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white text-white hover:bg-blue-700 transition"
            >
              <FaFacebook size={20} color="black" />
            </a>
          </div>
          </div>
          <p className="text-gray-500  text-justify text-sm">{blog.authordetails}</p>
          <Link href={''} passHref>
          <p className="mt-4 text-blue-500 cursor-pointer text-left text-xl">

          Read More
          </p>
          </Link>
        </div>
      </div> */}
    </div>
    </div>
  );
}

