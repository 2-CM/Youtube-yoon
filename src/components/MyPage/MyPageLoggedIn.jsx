import { clearWatchHistory, getWatchHistory } from '../../utils/watchHistory';
import { useEffect, useState } from 'react';

import { LogOut } from 'lucide-react';
import VideoCard from '../VideoGrid/VideoCard';

const MyPageLoggedIn = ({ currentUser, onLogout }) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory(getWatchHistory());
    }, []);

    const handleClearHistory = () => {
        clearWatchHistory();
        setHistory([]); // UI에 바로 반영되도록 state 비우기
    };

    return (
        <>
            <div className="mypage-profile [width:calc(100%-48px)] flex m-auto">
                <div className="mr-4 my-2 flex-shrink-0 w-[120px] h-[120px]">
                    <img
                        className="rounded-full w-full h-full object-fill"
                        src={currentUser.photoURL}
                        draggable="false"
                        alt="채널 사진"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <div className="text-4xl font-bold">{currentUser.displayName}</div>
                    <button className="logout-button" onClick={onLogout}>
                        <LogOut className="w-4 h-4 mr-1" strokeWidth={1} />
                        <span className="font-medium">로그아웃</span>
                    </button>
                </div>
            </div>

            <div className="pt-6 mx-6">
                <div className="mb-12">
                    <div className="mx-2 mb-4 flex justify-between items-center">
                        <span className="text-xl font-bold">기록</span>
                        <button
                            onClick={handleClearHistory}
                            className="border rounded-3xl px-4 py-2 text-sm font-medium button-interactive"
                        >
                            기록 삭제
                        </button>
                    </div>
                    <div className={history.length > 0 ? 'grid grid-cols-4 gap-4 mx-2' : 'flex justify-center mx-2'}>
                        {history.length > 0 ? (
                            history
                                .slice(0, 20)
                                .map((video) => (
                                    <VideoCard
                                        videoId={video.videoId}
                                        username={video.username}
                                        title={video.title}
                                        views={video.views}
                                        uploadedAt={video.uploadedAt}
                                        thumbnailUrl={video.thumbnailUrl}
                                        channelThumbnail={video.channelThumbnail}
                                    />
                                ))
                        ) : (
                            <span className="text-gray-500">시청 기록이 없습니다.</span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyPageLoggedIn;
