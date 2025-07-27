import { LogOut } from 'lucide-react';
import VideoCard from '../VideoGrid/VideoCard';
import mockVideoData from '../../data/mockVideoData';

const MyPageLoggedIn = ({ currentUser, onLogout }) => {
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
    );
};

export default MyPageLoggedIn;
