import { useEffect, useState } from 'react';

import VideoCard from './VideoCard';
import { fetchPopularVideos } from '../../api/youtube';
import { formatViewCount } from '../../utils/format';
import mockVideoData from '../../data/mockVideoData';

const VideoGrid = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchPopularVideos().then(setVideos).catch(console.error);
    }, []);

    return (
        <div className="mt-14 ml-[72px] w-full">
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 px-4 pt-6 pb-8">
                {videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        videoId={video.id}
                        username={video.snippet.channelTitle}
                        title={video.snippet.title}
                        views={formatViewCount(video.statistics?.viewCount || 0)}
                        uploadedAt={video.snippet.publishedAt}
                        thumbnailUrl={video.snippet.thumbnails.medium.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default VideoGrid;
