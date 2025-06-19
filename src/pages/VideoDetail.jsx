import { useParams } from 'react-router-dom';

const VideoDetail = () => {
    return (
        <>
            <div className="flex mt-14">
                <div className="pt-6 ml-6 pr-6 flex-1">
                    <div>영상</div>
                    <div>영상 정보</div>
                </div>

                <div className="pt-6 pr-6 w-[402px] min-w-[300px]">추천 영상</div>
            </div>
        </>
    );
};

export default VideoDetail;
