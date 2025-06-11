import VideoCard from './VideoCard';

const VideoGrid = () => {
    return (
        <div className="mt-14 ml-[72px] w-full">
            <div className="w-full grid grid-cols-3 gap-x-4 gap-y-8 px-4 pt-6 pb-8">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
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
