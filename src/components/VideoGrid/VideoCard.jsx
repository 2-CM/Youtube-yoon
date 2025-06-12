import UserProfile from '../../assets/user-profile.jpg';
import VideoThumnail from '../../assets/video_thumbnail.avif';

const VideoCard = ({ videoId, username, title, views, uploadedAt }) => {
    const handleCardClick = () => {
        window.location.href = `/video/${videoId}`;
    };

    return (
        <div onClick={handleCardClick} className="relative cursor-pointer group/click">
            {/* 썸네일 */}
            <div>
                <div className="h-full overflow-hidden rounded-xl">
                    <img
                        className="w-full h-full object-cover "
                        src={VideoThumnail}
                        draggable="false"
                        alt="영상 썸네일 사진"
                    />
                </div>
            </div>

            {/* 콘텐츠 하단 영역 */}
            <div className="relative flex">
                {/* 프로필 이미지 (유저 페이지 이동) */}
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

                {/* 텍스트 영역 */}
                <div className="pr-6">
                    <div className="mt-3 mb-1 text-base font-medium line-clamp-2">{title}</div>

                    <div className="text-sm font-normal text-[#606060]">
                        <a className="group" href={`/@${username}`}>
                            <div className="hover:text-[#0f0f0f] line-clamp-2 break-all">{username}</div>
                            <div className="tooltip left-13 top-1 ">{username}</div>
                        </a>
                        <span>{`${views} • ${uploadedAt}`}</span>
                    </div>
                </div>
            </div>

            {/* 클릭 효과 */}
            <div className="absolute inset-0 -m-1 pointer-events-none">
                <div className="videocard-click-bg"></div>
                {/* <div className="videocard-click-border"></div> */}
            </div>
        </div>
    );
};

export default VideoCard;
