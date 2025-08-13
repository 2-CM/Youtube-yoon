import VideoCard from './VideoCard';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useVideoNavigation } from '../../hooks/useVideoNavigation';

const VideoGrid = ({ videos, loadMore, loading, nextPageToken }) => {
    const { handleVideoClick } = useVideoNavigation(); // 커스텀 훅에서 영상 클릭 핸들러 불러오기
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && !loading && nextPageToken !== null) {
            loadMore();
        }
    }, [inView, loading, nextPageToken]);

    if (!videos || videos.length === 0) {
        return <div className="error-message">표시할 영상이 없습니다.</div>;
    }

    return (
        <div className="mt-14 ml-[72px] w-full">
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 px-4 pt-6 pb-8">
                {videos.map((videoData) => (
                    <VideoCard
                        key={videoData.videoId || videoData.id}
                        {...videoData}
                        onClick={() => handleVideoClick(videoData)}
                    />
                ))}
            </div>

            {/* 무한 스크롤 */}
            <div ref={ref}>
                <p className="flex justify-center pb-8 animate-bounce">로딩 중...</p>
            </div>
        </div>
    );
};

export default VideoGrid;
