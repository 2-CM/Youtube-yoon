import { useNavigate } from 'react-router-dom';

export const useVideoNavigation = () => {
    const navigate = useNavigate();

    // video: 영상 데이터 객체
    // onClick: 커스텀 클릭 핸들러가 있으면 호출, 없으면 navigate 처리
    const handleVideoClick = (video, onClick) => {
        if (onClick) {
            onClick(video);
        } else {
            navigate(`/video/${video.videoId}`, {
                state: { video },
            });
        }
    };

    return { handleVideoClick };
};
