import { useEffect, useState } from 'react';

import SkeletonVideoCard from '../VideoGrid/SkeletonVideoCard';
import VideoCard from '../VideoGrid/VideoCard';

const RecommendedVideos = ({ videos, onCardClick, loading }) => {
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

    if (loading) {
        const skeletonCount = isMobile ? 6 : 10; // 모바일/PC에서 보여줄 스켈레톤 개수
        return (
            <div className={isMobile ? 'ml-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4' : 'space-y-2'}>
                {Array.from({ length: skeletonCount }).map((_, i) => (
                    <SkeletonVideoCard key={`skeleton-${i}`} layout={isMobile ? 'vertical' : 'horizontal'} />
                ))}
            </div>
        );
    }

    if (videos.length === 0) {
        return <p className="flex justify-center py-10">연관된 동영상이 없습니다...</p>;
    }

    return (
        <div className={isMobile ? 'ml-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4' : 'space-y-2'}>
            {videos.map((video) => (
                <VideoCard
                    key={video.videoId}
                    {...video}
                    layout={isMobile ? 'vertical' : 'horizontal'}
                    showProfile={false}
                    compact={true}
                    isGridItem={isMobile}
                    onClick={() => onCardClick(video)}
                />
            ))}
        </div>
    );
};

export default RecommendedVideos;
