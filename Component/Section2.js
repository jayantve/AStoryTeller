import React from 'react';
import Data from '@/Component/Data'

const posts = Data

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-200 hover:shadow-lg flex flex-col md:flex-row">
     <div className="relative md:w-1/3">
        <iframe
          className='w-full h-48 object-cover'
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${post.YoutubeId}`} // Corrected line
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        >
        </iframe>
      </div>
      <div className="p-6 md:w-2/3">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          <a
            href={post.href}
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {post.title}
          </a>
        </h2>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <p className="text-sm text-gray-500 mt-2">Published: {post.date}</p>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Videos
        </h1>
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
