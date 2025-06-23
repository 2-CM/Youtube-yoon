import VideoCard from './VideoCard';
import mockVideoData from '../../data/mockVideoData';

const VideoGrid = () => {
    return (
        <div className="mt-14 ml-[72px] w-full">
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 px-4 pt-6 pb-8">
                {mockVideoData.map((video) => (
                    <VideoCard
                        key={video.videoId}
                        videoId={video.videoId}
                        username={video.username}
                        title={video.title}
                        views={video.views}
                        uploadedAt={video.uploadedAt}
                    />
                ))}
            </div>
        </div>
    );
};

export default VideoGrid;
