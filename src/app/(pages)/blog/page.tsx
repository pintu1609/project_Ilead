import Head from 'next/head';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function Blog() {
  const blogs = [
    {
      title: 'The Future of Leadership',
      description: 'Exploring the evolving landscape of leadership in the 21st century.',
      author: 'John Doe',
      date: 'February 25, 2025',
      image: '/img/home.png',
    },
    {
      title: 'Empowering Women Leaders',
      description: 'How mentorship and support are shaping the next generation of women leaders.',
      author: 'Jane Smith',
      date: 'March 5, 2025',
      image:'/img/ourleader.png'
    },
    {
      title: 'Innovation in Leadership',
      description: 'The role of technology and research in developing future leaders.',
      author: 'Michael Johnson',
      date: 'March 12, 2025',
      Image: '/img/ourinitiative.png'
    },
    {
      title: 'Building Inclusive Workplaces',
      description: 'Strategies to foster inclusivity and diversity in corporate environments.',
      author: 'Sarah Lee',
      date: 'March 18, 2025',
      image: '/img/ourinitiative.png',
    },
    {
      title: 'The Role of Mentorship in Career Growth',
      description: 'How mentorship can accelerate professional development and success.',
      author: 'David Brown',
      date: 'March 22, 2025',
      image: '/img/logo.png',
    },
    {
      title: 'Sustainable Leadership Practices',
      description: 'Exploring leadership strategies that promote sustainability and long-term impact.',
      author: 'Emma Wilson',
      date: 'March 28, 2025',
      image: '/img/home.png',
    }
  ];

  return (
    <div className="p-10">
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
          <Card key={index} className=" shadow-lg">
          <div className='h-64'>
          <Image src={blog.image || '/img/home.png'} alt={blog.title} width={500} height={200} className="rounded-md" />

          </div>
            <CardContent>
              <h2 className="text-2xl font-semibold pt-4">{blog.title}</h2>
              <p className="mt-2 text-gray-700">{blog.description}</p>
              <p className="mt-4 text-sm text-gray-500">By {blog.author} - {blog.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}