import VideoThumnail from '../../assets/video_thumbnail.avif';

const VideoCard = () => {
    return (
        <div className="h-full bg-gray-200">
            <div className="">
                <div className="h-full overflow-hidden rounded-xl">
                    <img className="w-full h-full object-cover" src={VideoThumnail} alt="영상 썸네일 사진" />
                </div>
            </div>
            <div className="flex">
                <div className="mt-3 mr-3">채널사진</div>
                <div className="pr-6">
                    <div className="mt-3 mb-1">영상제목</div>
                    <div>채널명</div>
                    <div>조회수</div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
