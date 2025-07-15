// 유튜브 API raw video 객체를 화면에 보여줄 데이터 형태로 변환하는 함수

import { formatTimeAgo, formatViewCount } from './format';

export function transformVideo(video) {
    return {
        videoId: video.id,
        username: video.snippet.channelTitle,
        title: video.snippet.title,
        views: formatViewCount(video.statistics?.viewCount || 0),
        uploadedAt: formatTimeAgo(video.snippet.publishedAt),
        thumbnailUrl: video.snippet.thumbnails.medium.url,
        channelThumbnail: video.channelThumbnail,
        description: video.snippet.description || '',
    };
}
