"use client";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import client from "../../../sanityClient";
import Link from "next/link";
import Button from "@/components/ui/button";

interface Blog {
  title: string;
  abstract: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

interface BlogProps {
  type: string;
  nums: number;
}

export default function Blog({ type , nums}: BlogProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [visibleBlogs, setVisibleBlogs] = useState<Blog[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const query = `
          *[_type == "blogPost" && type == $type] | order(date desc) {
            title,
            abstract,
            author,
            date,
            "image": mainImage.asset->url,
            "slug": slug.current
          }
        `;
        const data = await client.fetch(query, { type });

        setBlogs(data);
        setVisibleBlogs(data.slice(0, nums)); // Show only first 3 initially
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, [type, nums]);

  useEffect(() => {
    if (showAll) {
      setVisibleBlogs(blogs); // Show all blogs when "View All" is clicked
    } else {
      setVisibleBlogs(blogs.slice(0, nums)); // Reset to first 3 when showAll is false
    }
  }, [showAll, blogs, nums]);

  return (
    <div className="pl-2">
      <Head>
        <title>Blog - ILead Global Foundation</title>
        <meta
          name="description"
          content="Read insightful articles from the leaders at ILead Global Foundation."
        />
      </Head>

      <div className={`grid gap-6 ${nums === 1 ? "grid-cols-1" : nums === 2 ? "md:grid-cols-2 grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
      {visibleBlogs.map((blog, index) => (
          <Link href={`/blog/${blog?.slug ?? ""}`} passHref key={index}>
            <Card className="border-none rounded-none">
              <div className="sm:h-64">
                <Image
                  src={blog.image || "/img/home.png"}
                  alt={blog.title}
                  width={500}
                  height={200}
                  className=""
                />
              </div>
              <CardContent>
                <h2 className="text-2xl font-semibold pt-4 truncate">
                  {blog.title}
                </h2>
                <p className="mt-2 text-gray-700">{blog.abstract}</p>
                <p className="mt-4 text-sm text-gray-500">
                  By {blog.author} - {new Date(blog.date).toDateString()}
                </p>
              </CardContent>
              <div className="h-[4px] bg-[#757575] w-3/4">
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {blogs.length > nums && (
        <div className="text-center mt-6">
          <Button
            className="bg-[#0069a7] text-white font-semibold rounded-none hover:bg-[#2b5371] important hover:text-black border border-[#0069a7]"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "View All"}
          </Button>
        </div>
      )}
    </div>
  );
}
