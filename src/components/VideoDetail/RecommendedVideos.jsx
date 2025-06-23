import VideoCard from '../VideoGrid/VideoCard';

const RecommendedVideos = ({ videos, onCardClick }) => {
    return (
        <div className="recommended-videos pt-6 pb-6 mr-6 w-[402px] min-w-[300px]">
            {videos.slice(0, 10).map((video) => (
                <VideoCard
                    key={video.videoId}
                    {...video}
                    layout="horizontal"
                    onClick={() => onCardClick(video.videoId)}
                />
            ))}
        </div>
    );
};

export default RecommendedVideos;
