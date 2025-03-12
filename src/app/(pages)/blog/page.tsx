"use client"
import Head from 'next/head';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import client from '../../../../sanityClient';
import Link from 'next/link';


interface Blog {
  title: string;
  abstract: string;
  author: string;
  date: string;
  image: string;
  slug:string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await client.fetch(`
          *[_type == "blogPost"]{
            title,
            abstract,
            author,
            date,
            "image": mainImage.asset->url,
           "slug": slug.current // ✅ Extract only the string value
          }
        `);
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }
    fetchBlogs();
  }, []);
 
  console.log("🚀 ~ Blog ~ blogs:", blogs)
  

  return (
    <div className="sm:p-10 p-2">
      <Head>
        <title>Blog - ILead Global Foundation</title>
        <meta name="description" content="Read insightful articles from the leaders at ILead Global Foundation." />
      </Head>

      <h1 className="text-5xl font-bold text-center">Our Blog</h1>
      <p className="mt-6 text-lg text-center">
        Stay updated with the latest insights, stories, and perspectives from our leaders.
      </p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {blogs.map((blog, index) => (
          <Link href={`/blog/${blog?.slug ?? ""}`} passHref key={index}>

          <Card key={index} className=" shadow-lg">
          <div className='sm:h-64 '>
          <Image src={blog.image || '/img/home.png'} alt={blog.title} width={500} height={200} className="rounded-md" />

          </div>
            <CardContent>
            <h2 className="text-2xl font-semibold pt-4 truncate overflow-hidden whitespace-nowrap">
  {blog.title}
</h2>              <p className="mt-2 text-gray-700">{blog.abstract}</p>
              {/* <p className="mt-4 text-sm text-gray-500">By {blog.author} - {blog.date}</p> */}
              <p className="mt-4 text-sm text-gray-500">By {blog.author} - {new Date(blog.date).toDateString()}</p>

            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}