import React from 'react';
import videoData from '@/Component/VideoData.json'; // Renamed import to avoid confusion

const Section2 = () => {
  return (
    <div className="bg-purple-100 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3">
          {videoData.VideoData.map((video) => (
            <div key={video.id} className="text-center py-4 px-3 rounded-lg bg-purple-200">
              <div className="aspect-w-16 aspect-h-9 w-full mb-4 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.youtubeId.split('?')[0]}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-lg font-semibold text-gray-900">{video.name}</p>
              <p className="text-2xl font-bold text-blue-600">{video.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;