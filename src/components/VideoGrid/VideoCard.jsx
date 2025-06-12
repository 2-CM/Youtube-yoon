import UserProfile from '../../assets/user-profile.jpg';
import VideoThumnail from '../../assets/video_thumbnail.avif';

const VideoCard = () => {
    return (
        <div className="bg-gray-200 relative">
            <div className="">
                <div className="h-full overflow-hidden rounded-xl">
                    <img
                        className="w-full h-full object-cover "
                        src={VideoThumnail}
                        draggable="false"
                        alt="영상 썸네일 사진"
                    />
                </div>
            </div>
            <div className="flex">
                <div className="mt-3 mr-3 overflow-hidden rounded-full w-9 h-9">
                    <a href="/">
                        <img className="w-full h-full object-cover" src={UserProfile} alt="채널 프로필 사진" />
                    </a>
                </div>
                <div className="pr-6">
                    <div className="mt-3 mb-1 text-base font-medium line-clamp-2">
                        흘러가는대로 살고싶은 브금 흘러가는대로 살고싶은 브금 흘러가는대로 살고싶은 브금 흘러가는대로
                        살고싶은 브금 흘러가는대로 살고싶은 브금
                    </div>
                    <div>채널명</div>
                    <div>조회수</div>
                </div>
            </div>

            <a className="absolute top-0 w-full h-full" href="/"></a>
        </div>
    );
};

export default VideoCard;
