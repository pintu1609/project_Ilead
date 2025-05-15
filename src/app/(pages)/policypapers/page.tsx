"use client"
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import client from '../../../../sanityClient';
import BlogHorizontal from '@/components/blogs/BlogHorizontal';

interface Blog {
  title: string;
  abstract: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

const Careers: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
  

    useEffect(() => {
    async function fetchBlogs() {
      try {
        const query = `
          *[_type == "blogPost" && type == "policypapers"] | order(date desc) {
            title,
            abstract,
            author,
            date,
            "image": mainImage[0].asset->url,
            "slug": slug.current
          }
        `;
        const data = await client.fetch(query);
        console.log("🚀 ~ fetchBlogs ~ data:", data)
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);


  return (
    <div className="sm:p-10 p-2 ">
      <Head>
        <title>About Us - ILead Global Foundation</title>
        <meta name="description" content="Learn more about ILead Global Foundation, our mission, vision, and impact." />
      </Head>

      <h2 className="text-4xl font-bold text-center">Policy Papers</h2>
      <p className="mt-6 text-lg text-[#848484]">
        Since 2019, ILead Global Foundation has been dedicated to nurturing, developing, and empowering leaders across various fields. Our mission is to equip individuals with the necessary skills, knowledge, and resources to create meaningful change in society. Rooted in mentorship, innovation, and inclusivity, we are committed to fostering leadership that drives transformation and progress.
      </p>
       

         <div className=" my-2">
              {/* Header Section */}
              <div className=" w-full text-white">
              <div className="bg-[#f5f5f5] mx-2  mb-4">
                  
                {/* <h3 className="text-4xl font-bold text-center text-black py-8">{formattedTitle}</h3> */}
                </div>
        
                 
        
                  {/* Blog Component (Shows Selected Type) */}
                  <div className=" w-full ">
                    {blogs.length > 0 ? (
                      <div className="flex flex-col gap-[20px]">
                        {blogs.map(
                          (blog, index) => (
                            <BlogHorizontal
                              key={index} // Ensure unique key
                              title={blog.title}
                              abstract={blog.abstract}
                              author={blog.author}
                              date={blog.date}
                              image={blog.image}
                              slug={blog.slug}
                            />
                          )
                        )}
                      </div>
                    ) : (
                      <p className='text-center'>No updated blogs available.</p>
                    )}
                  </div>
              </div>
            </div>

     
    </div>
  );
}

export default Careers;
