import { useParams } from 'react-router-dom';

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
                    <div>영상 정보</div>
                </div>

                <div className="pt-6 pr-6 w-[402px] min-w-[300px]">추천 영상</div>
            </div>
        </>
    );
};

export default VideoDetail;
