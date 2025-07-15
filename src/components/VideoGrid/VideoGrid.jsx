import VideoCard from './VideoCard';
import { usePopularVideos } from '../../hooks/usePopularVideos';
import { useVideoNavigation } from '../../hooks/useVideoNavigation';

const VideoGrid = () => {
    const { videos, error } = usePopularVideos(); // 인기 영상 데이터와 에러 상태 받기
    const { handleVideoClick } = useVideoNavigation(); // 커스텀 훅에서 영상 클릭 핸들러 불러오기

    if (error) {
        return <div>영상 데이터를 불러오는데 실패했습니다.</div>;
    }

    return (
        <div className="mt-14 ml-[72px] w-full">
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 px-4 pt-6 pb-8">
                {videos.map((videoData) => (
                    <VideoCard key={videoData.videoId} {...videoData} onClick={() => handleVideoClick(videoData)} />
                ))}
            </div>
        </div>
    );
};

export default VideoGrid;
