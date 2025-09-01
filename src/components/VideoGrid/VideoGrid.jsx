import SkeletonVideoCard from './SkeletonVideoCard';
import VideoCard from './VideoCard';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useVideoNavigation } from '../../hooks/useVideoNavigation';

const VideoGrid = ({ videos, loadMore, loading, nextPageToken }) => {
    const { handleVideoClick } = useVideoNavigation(); // 커스텀 훅에서 영상 클릭 핸들러 불러오기
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView && !loading && nextPageToken) {
            loadMore();
        }
    }, [inView, loading, nextPageToken, loadMore]);

    const isInitialLoading = loading && (!videos || videos.length === 0);

    return (
        <div className="mt-14 ml-[72px] w-full">
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 px-4 pt-6 pb-8">
                {/* 초기 로딩 스켈레톤 */}
                {isInitialLoading && Array.from({ length: 9 }).map((_, i) => <SkeletonVideoCard key={i} />)}

                {/* 실제 영상 데이터 */}
                {videos.map((videoData) => (
                    <VideoCard
                        key={videoData.videoId || videoData.id}
                        {...videoData}
                        onClick={() => handleVideoClick(videoData)}
                    />
                ))}

                {/* 추가 로딩 스켈레톤 */}
                {!isInitialLoading &&
                    loading &&
                    Array.from({ length: 6 }).map((_, i) => <SkeletonVideoCard key={`more-${i}`} />)}

                {/* 무한 스크롤 관찰용 div */}
                <div ref={ref}></div>
            </div>

            {/* 데이터 없을 때 메시지 */}
            {!loading && videos.length === 0 && <p className="flex justify-center pb-8">표시할 영상이 없습니다.</p>}
        </div>
    );
};

export default VideoGrid;
