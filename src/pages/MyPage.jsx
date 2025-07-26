import { LogOut, SquarePlay } from 'lucide-react';

import LoginButton from '../components/LoginButton';
import SideBar from '../components/SideBar/SideBar';
import UserProfile from '../assets/user-profile.jpg';
import VideoCard from '../components/VideoGrid/VideoCard';
import { logout } from '../hooks/useAuth';
import mockVideoData from '../data/mockVideoData';
import { useAuthContext } from '../hooks/useAuthContext';

const MyPage = () => {
    const { currentUser } = useAuthContext(); // 로그인 상태 확인

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('로그아웃 실패', error);
        }
    };

    return (
        <>
            <SideBar />
            <div className="pt-14 ml-[72px]">
                {currentUser ? (
                    // 로그인 상태
                    <>
                        <div className="mypage-profile [width:calc(100%-48px)] flex m-auto">
                            <div className="mr-4 my-2 flex-shrink-0 w-[120px] h-[120px]">
                                <img
                                    className="rounded-full w-full h-full object-fill"
                                    src={UserProfile}
                                    alt="채널 사진"
                                />
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="text-4xl font-bold">채널 이름</div>
                                <button className="logout-button" onClick={handleLogout}>
                                    <LogOut className="w-4 h-4 mr-1" strokeWidth={1} alt="로그아웃 아이콘" />
                                    <span className="font-medium">로그아웃</span>
                                </button>
                            </div>
                        </div>

                        <div className="pt-6 mx-6">
                            <div className="mb-12">
                                <div className="ml-2 mb-4">
                                    <span className="text-xl font-bold">기록</span>
                                </div>
                                <div className="flex justify-center gap-x-4 mx-2">
                                    {mockVideoData.slice(0, 4).map((video) => (
                                        <div key={video.videoId} className="w-[calc(25%-16.01px)]">
                                            <VideoCard
                                                videoId={video.videoId}
                                                username={video.username}
                                                title={video.title}
                                                views={video.views}
                                                uploadedAt={video.uploadedAt}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    // 로그아웃 상태
                    <div className="flex flex-col items-center justify-center pt-36 mb-4">
                        <div>
                            <SquarePlay width={120} height={120} strokeWidth={1} />
                        </div>
                        <div className="my-6 m-auto font-normal">
                            <p className="text-2xl mb-4">좋아하는 동영상을 감상해 보세요.</p>
                            <p className="text-sm">저장하거나 좋아요 표시한 동영상을 보려면 로그인하세요.</p>
                        </div>
                        <LoginButton />
                    </div>
                )}
            </div>
        </>
    );
};

export default MyPage;
