const VideoPlayer = ({ videoSrc }) => {
    return (
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
                className="w-full h-full"
                src={videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default VideoPlayer;
