import { useEffect, useState } from 'react';

import { fetchSearchResults } from '../api/youtube';
import { transformVideo } from '../utils/transformVideoData';

export function useSearchVideos(query) {
    const [videos, setVideos] = useState([]); // 검색 결과 영상 리스트 상태
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(false); // 로딩 상태 (나중에 Skeleton UI 연동 예정)
    const [error, setError] = useState(null);

    // 다음 페이지 데이터를 가져오는 함수
    const loadMore = async () => {
        if (loading || !query.trim()) return; // 이미 로딩 중이거나 검색어가 없으면 실행 X
        setLoading(true); // 로딩 시작
        try {
            const data = await fetchSearchResults(query, nextPageToken); // 검색 API 호출 (검색어 + 다음 페이지 토큰)
            const transformedVideos = data.videos.map(transformVideo); // 데이터 형식 맞추기
            setVideos((prev) => [...prev, ...transformedVideos]); // 기존 영상 뒤에 붙임
            setNextPageToken(data.nextPageToken); // 다음 페이지 토큰 업데이트
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false); // 로딩 종료
        }
    };

    // 검색어가 바뀔 때마다 초기화 후 첫 페이지 불러오기
    useEffect(() => {
        setVideos([]); // 기존 영상 초기화
        setNextPageToken(null); // 다음 페이지 토큰 초기화
        loadMore(); // 첫 페이지 호출
    }, [query]);

    return { videos, loadMore, loading, nextPageToken, error };
}
