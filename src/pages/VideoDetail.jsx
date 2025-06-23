import { useNavigate, useParams } from 'react-router-dom';

import RecommendedVideos from '../components/VideoDetail/RecommendedVideos';
import VideoInfo from '../components/VideoDetail/VideoInfo';
import VideoPlayer from '../components/VideoDetail/VideoPlayer';
import mockVideoData from '../data/mockVideoData';

const VideoDetail = () => {
    const navigate = useNavigate();
    const { videoId } = useParams();

    const video = mockVideoData.find((v) => v.videoId === Number(videoId));

    const handleCardClick = (videoId) => {
        navigate(`/video/${videoId}`);
    };

    return (
        <div className="flex mt-14">
            <div className="pt-6 ml-6 pr-6 flex-1">
                {/* 영상 */}
                <VideoPlayer videoSrc="https://www.youtube.com/embed/0D-dHRtyiyE" />
                {/* 영상 제목, 채널 사진 및 이름, 영상 description */}
                <VideoInfo title={video.title} username={video.username} description={video.description} />
            </div>

            {/* 추천 영상 */}
            <RecommendedVideos videos={mockVideoData} onCardClick={handleCardClick} />
        </div>
    );
};

export default VideoDetail;
