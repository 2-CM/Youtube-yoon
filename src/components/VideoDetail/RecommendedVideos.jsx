import { useEffect, useState } from 'react';

import VideoCard from '../VideoGrid/VideoCard';

const RecommendedVideos = ({ videos, onCardClick }) => {
    const [isMobile, setIsMobile] = useState(false);

    // 화면 너비 기준으로 horizontal ↔ vertical 전환
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Tailwind의 lg 기준
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="recommended-videos">
            {isMobile ? (
                <div className="ml-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {videos.map((video) => (
                        <VideoCard
                            key={video.videoId}
                            {...video}
                            layout="vertical"
                            showProfile={false}
                            compact={true}
                            isGridItem={true}
                            onClick={() => onCardClick(video.videoId)}
                        />
                    ))}
                </div>
            ) : (
                <div className="space-y-2">
                    {videos.map((video) => (
                        <VideoCard
                            key={video.videoId}
                            {...video}
                            layout="horizontal"
                            onClick={() => onCardClick(video.videoId)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecommendedVideos;
