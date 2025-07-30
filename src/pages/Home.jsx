import SideBar from '../components/SideBar/SideBar';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import { usePopularVideos } from '../hooks/usePopularVideos';

const Home = () => {
    const { videos, error } = usePopularVideos(); // 인기 영상 데이터와 에러 상태 받기

    if (error) {
        return <div className="error-message">인기 영상 데이터를 불러오는 데 실패했습니다.</div>;
    }

    return (
        <>
            <div className="flex">
                <SideBar />
                <VideoGrid videos={videos} />
            </div>
        </>
    );
};

export default Home;
