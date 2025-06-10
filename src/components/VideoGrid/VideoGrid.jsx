import VideoCard from './VideoCard';

const VideoGrid = () => {
    return (
        <div className="bg-blue-600 mt-14 ml-[72px]">
            <div className="grid">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
};

export default VideoGrid;
