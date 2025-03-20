"use client";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  title: string;
  abstract: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

export default function BlogHorizontal({ title, abstract, author, date, image, slug }: Blog) {
  return (
    <div className="px-2">
      <Head>
        <title>Blog - ILead Global Foundation</title>
        <meta
          name="description"
          content="Read insightful articles from the leaders at ILead Global Foundation."
        />
      </Head>

      <Link href={`/blog/${slug ?? ""}`} passHref>
        <Card className="border-none flex flex-col md:flex-row rounded-none items-center overflow-hidden bg-white">
          {/* Blog Image */}
          <div className="md:w-96 w-full h-48 relative">
            <Image
              src={image || "/img/home.png"}
              alt={title}
              width={300} // Set explicit width in desktop view
              height={160} // Set explicit height in desktop view
              className="w-full h-full "
            />
          </div>

          {/* Blog Content */}
          <CardContent className="p-4 md:p-6 flex flex-col justify-between w-full md:w-none items-start">
            <h2 className="text-lg md:text-xl font-semibold truncate w-full">{title}</h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 line-clamp-2 w-full">{abstract}</p>
            <p className="mt-4 text-xs md:text-sm text-gray-500 w-full">
              By {author} - {new Date(date).toDateString()}
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
