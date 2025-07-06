const VideoThumbnail = ({ layout = 'vertical', thumbnailUrl }) => {
    return (
        <div>
            <div
                className={`overflow-hidden rounded-xl bg-gray-200 ${
                    layout === 'horizontal' ? 'w-[168px] h-[94px] flex-shrink-0' : 'w-full'
                }`}
            >
                <img
                    className="w-full h-full object-cover"
                    src={thumbnailUrl}
                    draggable="false"
                    alt="영상 썸네일 사진"
                />
            </div>
        </div>
    );
};

export default VideoThumbnail;
