import { useNavigate, useParams } from 'react-router-dom';

import UserProfile from '../assets/user-profile.jpg';
import VideoCard from '../components/VideoGrid/VideoCard';
import mockVideoData from '../data/mockVideoData';

const VideoDetail = () => {
    const navigate = useNavigate();
    const { videoId } = useParams();

    const video = mockVideoData.find((v) => v.videoId === Number(videoId));

    const handleCardClick = (videoId) => {
        navigate(`/video/${videoId}`);
    };

    return (
        <>
            <div className="flex mt-14">
                {/* 영상 */}
                <div className="pt-6 ml-6 pr-6 flex-1">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/0D-dHRtyiyE`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="mt-3 mb-6">
                        <div className="video-title text-xl font-bold">{video.title}</div>

                        <div className="channel-info flex items-center w-fit mr-3 mt-3">
                            <div className="rounded-full overflow-hidden w-10 h-10 mr-4 cursor-pointer">
                                <img src={UserProfile} draggable="false" alt={`${video.username} 채널 사진`} />
                            </div>

                            <div className="flex items-center font-medium text-base cursor-pointer">
                                {video.username}
                            </div>
                        </div>

                        <div className="video-description mt-3 bg-[rgba(0,0,0,0.05)] rounded-xl text-sm font-normal cursor-pointer">
                            <div className="p-3">
                                <div className="w-full">
                                    흘러가는대로 살고싶은 브금
                                    <br />
                                    오늘 할 일을 내일로 미루고
                                    <br />또 미루고
                                    <br />또 또 미루ㄱ....
                                    <br />
                                    <br />
                                    이번엔 왜..? ^-^
                                    <br />
                                    <br />. . .<br />
                                    <br />
                                    우하하
                                    <br />
                                    <br />
                                    배고프다 졸리다 자고싶다
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 추천 영상 */}
                <div className="recommended-videos pt-6 pb-6 mr-6 w-[402px] min-w-[300px]">
                    {mockVideoData.slice(0, 10).map((item) => (
                        <VideoCard
                            key={item.videoId}
                            {...item}
                            layout="horizontal"
                            onClick={() => handleCardClick(item.videoId)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoDetail;
