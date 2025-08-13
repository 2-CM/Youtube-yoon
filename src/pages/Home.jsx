import SideBar from '../components/SideBar/SideBar';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import { usePopularVideos } from '../hooks/usePopularVideos';

const Home = () => {
    const { videos, loadMore, loading, error, nextPageToken } = usePopularVideos();

    if (error) {
        return <div className="error-message">인기 영상 데이터를 불러오는 데 실패했습니다.</div>;
    }

    return (
        <>
            <div className="flex">
                <SideBar />
                <VideoGrid videos={videos} loadMore={loadMore} loading={loading} nextPageToken={nextPageToken} />
            </div>
        </>
    );
};

export default Home;
