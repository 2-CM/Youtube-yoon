import { EllipsisVertical } from 'lucide-react';
import UserProfile from '../../assets/user-profile.jpg';

const VideoCardContent = ({
    username,
    title,
    views,
    uploadedAt,
    channelThumbnail,
    layout = 'vertical',
    showProfile = true,
    compact = false,
    isGridItem = false,
}) => {
    const isHorizontal = layout === 'horizontal';

    return (
        <div className="relative flex w-full">
            {/* 프로필 이미지 (세로형 레이아웃일 때만 표시) */}
            {!isHorizontal && showProfile && (
                <div className="mt-3 mr-3 overflow-hidden rounded-full w-9 h-9 flex-shrink-0">
                    <img
                        className="w-full h-full object-cover"
                        src={channelThumbnail}
                        draggable="false"
                        alt={`${username}의 채널 이미지`}
                    />
                </div>
            )}

            {/* 텍스트 영역 */}
            <div className={`${isHorizontal || compact ? 'flex flex-col pr-6' : 'pr-10'} ${isGridItem ? 'py-2' : ''}`}>
                {/* 영상 제목 */}
                <div
                    className={`text-base font-medium line-clamp-2 break-all ${
                        isHorizontal || compact ? 'mb-1 text-sm' : 'mt-3 mb-1'
                    }`}
                >
                    {title}
                </div>

                <div
                    className={`text-[#606060] dark:text-[#aaa] ${
                        isHorizontal || compact ? 'text-xs' : 'videocard-content-text'
                    }`}
                >
                    {/* 업로더 이름 + 툴팁 */}
                    <div className="group inline-block align-top">
                        <div className="hover:text-[#0f0f0f] dark:hover:text-white line-clamp-2 break-all">
                            {username}
                        </div>
                        <div className="tooltip -top-5 z-10">{username}</div>
                    </div>

                    {/* 조회수 + 업로드 날짜 */}
                    <div>{`조회수 ${views} • ${uploadedAt}`}</div>
                </div>
            </div>

            {/* 더보기 버튼 */}
            <button
                className={`ripple-effect ${
                    isHorizontal || compact ? 'absolute right-0 w-6 h-6' : 'absolute right-0 top-1 w-10 h-10'
                }
                ${isGridItem ? 'mt-2' : ''}
                active:bg-black/10 dark:active:bg-white/10 rounded-full flex items-center justify-center`}
                type="button"
                onClick={(e) => e.stopPropagation()} // 상위 요소 클릭 이벤트 막기
            >
                <EllipsisVertical size={20} alt="더보기" />
            </button>
        </div>
    );
};

export default VideoCardContent;
