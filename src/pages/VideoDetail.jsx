import { Link, useParams } from 'react-router-dom';

import UserProfile from '../assets/user-profile.jpg';

const VideoDetail = () => {
    return (
        <>
            <div className="flex mt-14">
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
                        <div className="video-title text-xl font-bold">흘러가는대로 살고싶은 브금</div>

                        <div className="channel-info flex items-center w-fit mr-3 mt-3">
                            <Link to={'/@username'}>
                                <div className="rounded-full overflow-hidden w-10 h-10 mr-4">
                                    <img src={UserProfile} draggable="false" alt="채널 사진" />
                                </div>
                            </Link>

                            <Link to={'/@username'}>
                                <div className="flex items-center font-medium text-base">동숲주민</div>
                            </Link>
                        </div>

                        <div className="video-description">description</div>
                    </div>
                </div>

                <div className="pt-6 pr-6 w-[402px] min-w-[300px]">추천 영상</div>
            </div>
        </>
    );
};

export default VideoDetail;
