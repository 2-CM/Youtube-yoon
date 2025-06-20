import VideoThumbnailImg from '../../assets/video_thumbnail.avif';

const VideoThumbnail = () => {
    return (
        <div>
            <div className="h-full overflow-hidden rounded-xl">
                <img
                    className="w-full h-full object-cover"
                    src={VideoThumbnailImg}
                    draggable="false"
                    alt="영상 썸네일 사진"
                />
            </div>
        </div>
    );
};

export default VideoThumbnail;
