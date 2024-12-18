import React from 'react';
import { Link } from 'react-router-dom';

const Videos = ({ videos }) => {
  console.log(videos);

  if (!videos || videos.length === 0) {
    return <div className="text-center text-xl font-bold">Loading...</div>;
  }

  return (
    <div className="w-[] lg:p-4 mx-auto lg:mt-[2.9rem] mt-[8rem] lg:ml-[13rem]">
      <h1 className="text-2xl font-bold mb-4">
        New <span className="textColor">Videos</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((item, index) => (

        <Link key={index} to={`/videos/details/${index}`}>
          <div className="VideoRes w-[260px] h-[260px] bg-black rounded-lg shadow-xl shadow-black ">
              <img
                src={item.snippet?.thumbnails?.high?.url || ''}
                alt={item.snippet?.title || 'Video thumbnail'}
                className="w-full h-[58%] object-cover rounded-t-lg"
              />

              <h2 className="text-gray-200 p-2 text-lg truncate">
                {item.snippet?.title || 'Untitled Video'}
              </h2>

              <h3 className="px-2 text-sm text-gray-400">
                {item.snippet?.channelTitle || 'Unknown Channel'}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Videos;
