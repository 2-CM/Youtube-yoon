import { EllipsisVertical } from 'lucide-react';
import UserProfile from '../../assets/user-profile.jpg';
import { useNavigate } from 'react-router-dom';

const VideoCardContent = ({ username, title, views, uploadedAt }) => {
    const navigate = useNavigate();

    return (
        <div className="relative flex">
            {/* 프로필 이미지 */}
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
            <div className="pr-10">
                <div className="mt-3 mb-1 text-base font-medium line-clamp-2 break-all">{title}</div>

                <a className="inline-flex group videocard-content-text" href={`/@${username}`}>
                    <div className="hover:text-[#0f0f0f] line-clamp-2 break-all">{username}</div>
                    <div className="tooltip left-13 top-1 z-10">{username}</div>
                </a>

                <div className="videocard-content-text">{`조회수 ${views} • ${uploadedAt}`}</div>
            </div>

            {/* 더보기 버튼 */}
            <button
                className="ripple-effect absolute right-0 top-1 w-10 h-10 flex items-center justify-center active:bg-[rgba(0,0,0,0.1)] rounded-full"
                type="button"
                onClick={(e) => e.stopPropagation()}
            >
                <EllipsisVertical size={20} alt="더보기" />
            </button>
        </div>
    );
};

export default VideoCardContent;
