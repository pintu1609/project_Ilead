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
          <div className="w-64 h-48 relative">
            <Image
              src={image || "/img/home.png"}
              alt={title}
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Blog Content */}
          <CardContent className="p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold truncate">{title}</h2>
            <p className="mt-2 text-gray-700 line-clamp-2">{abstract}</p>
            <p className="mt-4 text-sm text-gray-500">
              By {author} - {new Date(date).toDateString()}
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
