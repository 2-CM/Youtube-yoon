import VideoCardContent from './VideoCardContent';
import VideoThumbnail from './VideoThumbnail';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({
    videoId,
    username,
    title,
    views,
    uploadedAt,
    thumbnailUrl,
    channelThumbnail,
    layout = 'vertical',
    showProfile = true,
    compact = false,
    isGridItem = false,
}) => {
    const navigate = useNavigate();
    const isHorizontal = layout === 'horizontal';

    const handleCardClick = () => {
        navigate(`/video/${videoId}`);
    };

    return (
        <div
            onClick={handleCardClick}
            className={`relative cursor-pointer group/click ${isHorizontal ? 'flex gap-2 mt-2' : ''}`}
        >
            {/* 썸네일 */}
            <VideoThumbnail layout={layout} thumbnailUrl={thumbnailUrl} />

            {/* 콘텐츠 하단 영역 */}
            <VideoCardContent
                username={username}
                title={title}
                views={views}
                uploadedAt={uploadedAt}
                channelThumbnail={channelThumbnail}
                layout={layout}
                showProfile={showProfile}
                compact={compact}
                isGridItem={isGridItem}
            />

            {/* 클릭 효과 */}
            <div className="absolute inset-0 -m-1 pointer-events-none">
                <div className="videocard-click-bg"></div>
                {/* <div className="videocard-click-border"></div> */}
            </div>
        </div>
    );
};

export default VideoCard;
