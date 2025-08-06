import { useEffect, useState } from 'react';

import SideBar from '../components/SideBar/SideBar';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import { fetchSearchResults } from '../api/youtube';
import { transformVideo } from '../utils/transformVideoData';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
    const location = useLocation();
    const [videos, setVideos] = useState([]); // 검색 결과 영상 리스트 상태
    const [loading, setLoading] = useState(false); // 로딩 상태 (나중에 Skeleton UI 연동 예정)

    // URL 쿼리 파라미터에서 검색어(q) 추출
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';

    useEffect(() => {
        if (!query.trim()) {
            // 검색어가 비어 있으면 초기화
            setVideos([]);
            return;
        }

        setLoading(true); // 로딩 시작

        // 검색 결과 API 호출
        fetchSearchResults(query)
            // 받아온 원시 데이터를 transform해서 상태에 저장
            .then((data) => setVideos(data.map(transformVideo)))
            .catch((err) => {
                console.error(err);
                setVideos([]);
            })
            .finally(() => setLoading(false)); // 로딩 종료
    }, [query]); // 검색어가 바뀔 때마다 실행

    return (
        <div className="flex">
            <SideBar />
            {loading ? (
                // 나중에 Skeleton 컴포넌트로 대체
                <p className="error-message">검색 중...</p>
            ) : (
                <VideoGrid videos={videos} loading={loading} />
            )}
        </div>
    );
};

export default SearchResult;
