"use client";
import Blog from '@/components/blogs/Blog';
import React, { useEffect, useState } from 'react';
import client from '../../../../../../sanityClient';
import Button from '@/components/ui/button';
import Link from 'next/link';


interface Blog {
    title: string;
    abstract: string;
    author: string;
    date: string;
    image: string;
    slug: string;
}

const Initiativesdetails: React.FC = () => {
    const [selectedType, setSelectedType] = useState("initiatives");
    const [blogs, setBlogs] = useState<Blog[]>([]);


    useEffect(() => {
        async function fetchBlogs() {
            try {
                const query = `
            *[_type == "blogPost" && type == "${selectedType}"] | order(date desc) {
              title,
              abstract,
              author,
              date,
              "image": mainImage.asset->url,
              "slug": slug.current
            }
          `;
                const data = await client.fetch(query);
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        }
        fetchBlogs();
    }, [selectedType]);

    return (
        <div className="mx-2 my-4 mt-8 ">
            {/* Header Section */}
            <div className="bg-[#333333] w-full text-white md:p-6 p-2">
                <h3 className="text-4xl font-bold text-center">Initiatives</h3>

                <div className='flex md:flex-row flex-col p-6 gap-4 md:gap-0'>
                    {/* Category Selection */}
                    <div className="md:w-1/3 w-full flex flex-col bg-[#212121] p-8 gap-2 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                        <button
                            className={`text-2xl p-2 text-left text-white hover:bg-[#0169a7] ${selectedType === "initiatives" ? "bg-[#0169a7]" : ""}`}
                             onClick={() => setSelectedType("initiatives")}
    >
                            Initiatives
                        </button>
                        <button
                            className={`text-2xl p-2  text-left text-white hover:bg-[#0169a7] ${selectedType === "featured" ? "bg-[#0169a7]" : ""}`}
            onClick={() => setSelectedType("featured")}
    >
                            Featured
                        </button>
                        <button
                            className={`text-2xl p-2 text-left text-white hover:bg-[#0169a7] ${selectedType === "updated" ? "bg-[#0169a7]" : ""}`}
                            onClick={() => setSelectedType("updated")}
                        >
                            All Updated
                        </button>


                    </div>

                    {/* Blog Component (Shows Selected Type) */}
                    <div className="md:w-2/3 w-full ">
                        {blogs.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2 grid-cols-1">
                                {(blogs.slice(0, 2)).map(
                                    (blog, index) => (
                                        <Blog
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

                {blogs.length > 2 && (
          <div className="text-center mt-6">
                        <Link href={`/initiatives?type=${selectedType}`}>
                        <Button
              className="bg-[#0069a7] text-white font-semibold rounded-none hover:bg-[#2b5371] border border-[#0069a7]"
            >
               View All
            </Button>
            </Link>
          </div>
        )}
            </div>
        </div>
    );
};

export default Initiativesdetails;
