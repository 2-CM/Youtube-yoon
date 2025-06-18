import VideoCard from './VideoCard';

// 임시 데이터
const mockVideoData = Array.from({ length: 15 }, (_, i) => ({
    videoId: i + 1,
    username: `동숲거주자${i + 1}`,
    title: `흘러가는대로 살고싶은 브금 #${i + 1}`,
    views: `${(Math.random() * 100).toFixed(0)}만회`,
    uploadedAt: `${Math.floor(Math.random() * 12) + 1}개월 전`,
}));

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
