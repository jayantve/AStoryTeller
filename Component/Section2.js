import React from 'react';

const stats = [
    { 
        id: 1, 
        name: 'Video 1', 
        value: '2.4K', 
        youtubeId: 'fTB3vHqlWeg?si=hM-ZYg-U_vHJZ4AH' ,
    },
    { 
        id: 2, 
        name: 'Video 2', 
        value: '17', 
        youtubeId: 'y-xu6tkMTto?si=u02Y81oA_gKUiYgq',
    }, 
    { 
        id: 3, 
        name: 'Video 3', 
        value: '41', 
        youtubeId: 'MMwPo3JDLzc?si=yZvrSi5VtgdS-l3-' ,
    }, 
    { 
        id: 4, 
        name: 'Video 4', 
        value: '324', 
        youtubeId: 'JmffSpB0QoE?si=tiHPYNmxe51Np6fc' ,
    },
];

const Section2 = () => {
    return (
        <div className="bg-grey-900 py-6 sm:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="text-center py-4 px-3 rounded-lg bg-gray-50">
                            <div className="aspect-w-16 aspect-h-16 w-full mb-4 bg-grey-200">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src={`https://www.youtube.com/embed/${stat.youtubeId}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                            <p className="text-lg font-semibold text-gray-900">{stat.name}</p>
                            <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section2;
