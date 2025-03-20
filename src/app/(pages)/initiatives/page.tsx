"use client";
import React, { Suspense, useEffect, useState } from 'react';
import Blog from '../../../components/blogs/Blog';
import client from '../../../../sanityClient';
import { useSearchParams } from 'next/navigation';
import BlogHorizontal from '@/components/blogs/BlogHorizontal';


interface Blog {
  title: string;
  abstract: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

const typeDisplayMap: Record<string, string> = {
  initiatives: "Initiatives",
  featured:"Featured",
  updated:"All Updated"
};
const InitiativesContent: React.FC = () => {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "initiatives"; // Get type from URL, default to "initiatives"

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const formattedTitle = typeDisplayMap[initialType] || "Initiatives";

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const query = `
          *[_type == "blogPost" && type == "${initialType}"] | order(date desc) {
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
    if(initialType) fetchBlogs();
  }, [initialType]);

  return (
    <div className="md:mx-10 mx-2 my-2">
      {/* Header Section */}
      <div className=" w-full text-white md:p-6 p-2">
        <h3 className="text-4xl font-bold text-center text-black py-8">{formattedTitle}</h3>

         

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
  );
};

const Initiatives: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InitiativesContent />
    </Suspense>
  );
};

export default Initiatives;
