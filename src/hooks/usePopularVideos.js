import { useEffect, useState } from 'react';

import { fetchPopularVideos } from '../api/youtube';
import { transformVideo } from '../utils/transformVideoData';

export function usePopularVideos() {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadMore = async () => {
        if (loading) return; // 중복 호출 방지
        setLoading(true);
        try {
            const data = await fetchPopularVideos(nextPageToken); // 현재 토큰으로 영상 더 불러오기
            const transformedVideos = data.videos.map(transformVideo); // 데이터 형식 맞추기
            setVideos((prev) => [...prev, ...transformedVideos]); // 기존 영상 뒤에 붙임
            setNextPageToken(data.nextPageToken); // 다음 페이지 토큰 업데이트
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadMore(); // 최초 로딩
    }, []);

    return { videos, loadMore, loading, nextPageToken, error };
}
