import UserProfile from '../../assets/user-profile.jpg';
import VideoThumnail from '../../assets/video_thumbnail.avif';

const VideoCard = () => {
    return (
        <a href="/video">
            <div className="relative">
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
                    <div className="mt-3 mr-3 overflow-hidden rounded-full w-9 h-9 flex-shrink-0">
                        <a href="/user">
                            <img
                                className="w-full h-full object-cover"
                                src={UserProfile}
                                draggable="false"
                                alt="채널 프로필 사진"
                            />
                        </a>
                    </div>
                    <div className="pr-6">
                        <a href="/video">
                            <div className="mt-3 mb-1 text-base font-medium line-clamp-2">
                                흘러가는대로 살고싶은 브금 흘러가는대로 살고싶은 브금 흘러가는대로 살고싶은 브금
                                흘러가는대로 살고싶은 브금 흘러가는대로 살고싶은 브금
                            </div>
                        </a>
                        <div className="text-sm  font-normal text-[#606060]">
                            <div className="hover:text-[#0f0f0f] line-clamp-2 break-all">동숲거주자</div>
                            <span>조회수 10만회</span>
                            <span className="before:content-['•'] before:mx-1">6개월 전</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default VideoCard;
