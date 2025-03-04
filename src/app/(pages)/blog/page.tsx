import React from 'react';
interface BlogProps {
}
const Blog: React.FC<BlogProps> = () => {
 

return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Our Blog</h2>
      <p className="mt-4">Meet the inspiring individuals driving change through leadership and innovation.</p>
      {/* Add leader profiles here */}
    </div>
  );
}

export default Blog