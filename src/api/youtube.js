import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchPopularVideos = async () => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                regionCode: 'KR',
                maxResults: 10,
                key: API_KEY,
            },
        });
        return response.data.items;
    } catch (error) {
        console.error('🔥 인기 동영상 API 호출 실패:', error);
        throw error;
    }
};
