import RecommendedVideos from '../components/VideoDetail/RecommendedVideos';
import VideoInfo from '../components/VideoDetail/VideoInfo';
import VideoPlayer from '../components/VideoDetail/VideoPlayer';
import { useLocation } from 'react-router-dom';
import { useSearchVideos } from '../hooks/useSearchVideos';
import { useVideoNavigation } from '../hooks/useVideoNavigation';

const VideoDetail = () => {
    const location = useLocation();
    const video = location.state?.video;
    const { handleVideoClick } = useVideoNavigation();

    // video의 채널명 또는 제목 기반 검색 -> 추천 영상 가져오기
    const { videos, error, loading } = useSearchVideos(video?.title || '');

    const filteredVideos = videos.filter((v) => v.videoId !== video.videoId);

    if (!video) {
        return <div>영상 정보를 불러올 수 없습니다.</div>;
    }
    if (error) {
        return <div>추천 영상 데이터를 불러오는 중 오류가 발생했습니다.</div>;
    }

    return (
        <div className="flex flex-col lg:flex-row pt-14">
            <div className="pt-6 ml-6 pr-6 flex-1">
                {/* VideoPlayer에 영상 ID 또는 영상 URL 넘기기 */}
                <VideoPlayer videoSrc={`https://www.youtube.com/embed/${video.videoId}`} />

                {/* VideoInfo에 영상 정보 넘기기 */}
                <VideoInfo
                    title={video.title}
                    channelThumbnail={video.channelThumbnail}
                    username={video.username}
                    views={video.views}
                    uploadedAt={video.uploadedAt}
                    description={video.description}
                />
            </div>

            {/* 추천 영상 */}
            <div className="w-full lg:w-[402px] lg:min-w-[300px] py-6 pr-6">
                {loading ? (
                    <div>추천 영상을 불러오는 중...</div>
                ) : (
                    <RecommendedVideos videos={filteredVideos} onCardClick={handleVideoClick} />
                )}
            </div>
        </div>
    );
};

export default VideoDetail;
