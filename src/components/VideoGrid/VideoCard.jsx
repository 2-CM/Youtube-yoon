import UserProfile from '../../assets/user-profile.jpg';
import VideoThumnail from '../../assets/video_thumbnail.avif';

const VideoCard = ({ videoId, username, title, views, uploadedAt }) => {
    return (
        <a href={`/video/${videoId}`}>
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

                <div className="relative flex">
                    <div className="mt-3 mr-3 overflow-hidden rounded-full w-9 h-9 flex-shrink-0">
                        <a href={`/@${username}`}>
                            <img
                                className="w-full h-full object-cover"
                                src={UserProfile}
                                draggable="false"
                                alt="채널 프로필 사진"
                            />
                        </a>
                    </div>

                    <div className="pr-6">
                        <a href={`/video/${videoId}`}>
                            <div className="mt-3 mb-1 text-base font-medium line-clamp-2">{title}</div>
                        </a>

                        <div className="group text-sm font-normal text-[#606060]">
                            <div className="hover:text-[#0f0f0f] line-clamp-2 break-all">{username}</div>
                            <div className="tooltip left-13 top-1">{username}</div>
                            <span>{`${views} • ${uploadedAt}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default VideoCard;
