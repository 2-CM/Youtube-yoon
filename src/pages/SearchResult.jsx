import SideBar from '../components/SideBar/SideBar';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import { useLocation } from 'react-router-dom';
import { useSearchVideos } from '../hooks/useSearchVideos';

const SearchResult = () => {
    const location = useLocation();
    // URL 쿼리 파라미터에서 검색어(q) 추출
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';
    const { videos, loadMore, loading, nextPageToken, error } = useSearchVideos(query);

    if (error) return <div className="error-message">검색 결과를 불러오는 데 실패했습니다.</div>;

    return (
        <div className="flex">
            <SideBar />
            <VideoGrid videos={videos} loadMore={loadMore} loading={loading} nextPageToken={nextPageToken} />
        </div>
    );
};

export default SearchResult;
