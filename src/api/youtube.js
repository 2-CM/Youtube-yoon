import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchPopularVideos = async () => {
    try {
        // 인기 영상 목록 요청 (영상 정보 + 조회수)
        const videoRes = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet,statistics',
                chart: 'mostPopular',
                regionCode: 'KR',
                maxResults: 50,
                key: API_KEY,
            },
        });

        const videos = videoRes.data.items;

        // 영상마다 채널 ID 추출 (중복 제거)
        const channelIds = [...new Set(videos.map((v) => v.snippet.channelId))];

        // 채널 ID 목록을 통해 채널 정보 요청 (프로필 사진)
        const channelRes = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
            params: {
                part: 'snippet',
                id: channelIds.join(','), // 쉼표로 연결해서 한 번에 요청
                key: API_KEY,
            },
        });

        // 채널 ID → 프로필 사진 URL 매핑
        const channelThumbMap = {};
        channelRes.data.items.forEach((channel) => {
            channelThumbMap[channel.id] = channel.snippet.thumbnails.default.url;
        });

        // 각 영상에 해당 채널의 프로필 사진 URL 추가
        const videosUpdated = videos.map((video) => ({
            ...video,
            channelThumbnail: channelThumbMap[video.snippet.channelId],
        }));

        return videosUpdated;
    } catch (error) {
        console.error('🔥 인기 동영상 API 호출 실패:', error);
        throw error;
    }
};
