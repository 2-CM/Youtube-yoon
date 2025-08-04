import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

// 채널 ID 배열 받아서 채널 정보(프로필 사진) 가져오기
const fetchChannelThumbnails = async (channelIds) => {
    const channelRes = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
        params: {
            part: 'snippet',
            id: channelIds.join(','),
            key: API_KEY,
        },
    });

    const channelThumbMap = {};
    channelRes.data.items.forEach((channel) => {
        channelThumbMap[channel.id] = channel.snippet.thumbnails.default.url;
    });

    return channelThumbMap;
};

// 영상 배열 받아서 채널 썸네일 붙여서 반환하는 함수
const addChannelThumbnails = async (videos) => {
    const channelIds = [...new Set(videos.map((v) => v.snippet.channelId))];
    const channelThumbMap = await fetchChannelThumbnails(channelIds);

    return videos.map((video) => ({
        ...video,
        channelThumbnail: channelThumbMap[video.snippet.channelId] || '',
    }));
};

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

        return await addChannelThumbnails(videos);
    } catch (error) {
        console.error('인기 동영상 API 호출 실패:', error);
        throw error;
    }
};

export const fetchSearchResults = async (query) => {
    try {
        // 사용자가 입력한 검색어로 관련 영상 검색
        const searchRes = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: query, // 검색어
                type: 'video', // 영상만 검색
                regionCode: 'KR',
                maxResults: 20,
                key: API_KEY,
            },
        });

        const videos = searchRes.data.items;
        // 검색 결과에서 videoId만 추출
        const videoIds = videos.map((v) => v.id.videoId).join(',');

        // videoId들을 바탕으로 영상의 상세 정보 및 조회수 등 통계 조회
        const detailsRes = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet,statistics',
                id: videoIds,
                key: API_KEY,
            },
        });

        const detailedVideos = detailsRes.data.items;

        return await addChannelThumbnails(detailedVideos);
    } catch (error) {
        console.error('검색 API 호출 실패:', error);
        throw error;
    }
};
