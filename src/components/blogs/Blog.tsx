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



export default function Blog({ title , abstract,author,date,image,slug}: Blog) {
 


  

  return (
    <div className="pl-2">
      <Head>
        <title>Blog - ILead Global Foundation</title>
        <meta
          name="description"
          content="Read insightful articles from the leaders at ILead Global Foundation."
        />
      </Head>

      {/* <div className={`grid gap-6 ${nums === 1 ? "grid-cols-1" : nums === 2 ? "md:grid-cols-2 grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
      {visibleBlogs.map((blog, index) => ( */}
          <Link href={`/blog/${slug ?? ""}`} passHref>
            <Card className="border-none rounded-none">
              <div className="sm:h-64">
                <Image
                  src={image || "/img/home.png"}
                  alt={title}
                  width={500}
                  height={200}
                  className=""
                />
              </div>
              <CardContent>
                <h2 className="text-2xl font-semibold pt-4 truncate">
                  {title}
                </h2>
                <p className="mt-2 text-gray-700">{abstract}</p>
                <p className="mt-4 text-sm text-gray-500">
                  By {author} - {new Date(date).toDateString()}
                </p>
              </CardContent>
              <div className="h-[4px] bg-[#757575] w-3/4">
              </div>
            </Card>
          </Link>
        {/* ))} */}
      {/* </div> */}

      
    </div>
  );
}
