"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Blog from "@/components/blogs/Blog";
import Button from "@/components/ui/button";
import client from "../../../../../../sanityClient"; // Ensure this is correctly imported
import Initiativesdetails from "../initiativesdetails/page";


interface Blog {
  title: string;
  abstract: string;
  author: string;
  date: string;
  // image: { asset: { url: string } }[];
  image: string;
  slug: string;
}

const Homedetails: React.FC = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([]);
  const [updatedBlogs, setUpdatedBlogs] = useState<Blog[]>([]);
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [showAllUpdated, setShowAllUpdated] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const featuredQuery = `
          *[_type == "blogPost" && type == "featured"] | order(date desc) {
            title,
            abstract,
            author,
            date,
          //   "image": mainImage[]{
          //   asset->{
          //     url
          //   }
          // },  
           "image": mainImage[0].asset->url, 
           "slug": slug.current
          }
        `;

        const updatedQuery = `
          *[_type == "blogPost" && type == "updated"] | order(date desc) {
            title,
            abstract,
            author,
            date,
           "image": mainImage[0].asset->url,
            "slug": slug.current
          }
        `;

        const [featuredData, updatedData] = await Promise.all([
          client.fetch(featuredQuery),
          client.fetch(updatedQuery),
        ]);
        console.log("🚀 ~ fetchBlog ~ data:", featuredData);

        setFeaturedBlogs(featuredData);
        setUpdatedBlogs(updatedData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Home - ILead Global Foundation</title>
        <meta
          name="description"
          content="Welcome to ILead Global Foundation, empowering leaders for a better tomorrow."
        />
      </Head>

      {/* Featured Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-row gap-4 items-center mt-8 mb-8">
          <h2 className="text-4xl font-semibold text-left">Featured</h2>
          <div className="h-2 w-16 bg-[#FFC107]"></div>
        </div>

        <div>
          {featuredBlogs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
              {(showAllFeatured ? featuredBlogs : featuredBlogs.slice(0, 3)).map(
                (blog, index) => (
                  <Blog
                    key={index} // Ensure unique key
                    title={blog.title}
                    abstract={blog.abstract}
                    author={blog.author}
                    date={blog.date}
                    image={blog.image|| ""} // fallback if array is empty
                    slug={blog.slug}
                  />
                )
              )}
            </div>
          ) : (
            <p>No featured blogs available.</p>
          )}
        </div>

        {featuredBlogs.length > 3 && (
          <div className="text-center mt-6">
            <Button
              className="bg-[#0069a7] text-white font-semibold rounded-none hover:bg-[#2b5371] border border-[#0069a7]"
              onClick={() => setShowAllFeatured((prev) => !prev)}
            >
              {showAllFeatured ? "Show Less" : "View All"}
            </Button>
          </div>
        )}
      </motion.div>

      {/* All Updates Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-row gap-4 items-center mb-8">
          <h2 className="text-4xl font-semibold text-left py-8">All Updates</h2>
          <div className="h-2 w-16 bg-[#FFC107]"></div>
        </div>

        <div>
          {updatedBlogs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
              {(showAllUpdated ? updatedBlogs : updatedBlogs.slice(0, 3)).map(
                (blog, index) => (
                  <Blog
                    key={index} // Ensure unique key
                    title={blog.title}
                    abstract={blog.abstract}
                    author={blog.author}
                    date={blog.date}
                    image={blog.image || ""} 
                    slug={blog.slug}
                  />
                )
              )}
            </div>
          ) : (
            <p>No updated blogs available.</p>
          )}
        </div>

        {updatedBlogs.length > 3 && (
          <div className="text-center mt-6">
            <Button
              className="bg-[#0069a7] text-white font-semibold rounded-none hover:bg-[#2b5371] border border-[#0069a7]"
              onClick={() => setShowAllUpdated((prev) => !prev)}
            >
              {showAllUpdated ? "Show Less" : "View All"}
            </Button>
          </div>
        )}
      </motion.div>

      <Initiativesdetails/>
    </div>
  );
};

export default Homedetails;
