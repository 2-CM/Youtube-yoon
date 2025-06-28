import UserProfile from '../../assets/user-profile.jpg';

const VideoInfo = ({ title, username, views, uploadedAt, description }) => {
    return (
        <div className="mt-3 mb-6">
            <div className="video-title text-xl font-bold">{title}</div>

            <div className="channel-info relative flex items-center w-fit mr-3 mt-3">
                <div className="rounded-full overflow-hidden w-10 h-10 mr-4 cursor-pointer">
                    <img src={UserProfile} draggable="false" alt={`${username} 채널 사진`} />
                </div>

                <div className="group">
                    <div className="flex items-center font-medium text-base cursor-pointer">{username}</div>
                    <div className="tooltip -top-16">{username}</div>
                </div>
            </div>

            <div className="video-description mt-3 bg-[rgba(0,0,0,0.05)] rounded-xl text-sm font-normal cursor-pointer">
                <div className="p-3">
                    <div className="font-medium">
                        조회수 {views} {uploadedAt}
                    </div>
                    <div className="w-full whitespace-pre-line">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoInfo;
