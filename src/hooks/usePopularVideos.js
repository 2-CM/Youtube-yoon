import { useEffect, useState } from 'react';

import { fetchPopularVideos } from '../api/youtube';
import { transformVideo } from '../utils/transformVideoData';

export function usePopularVideos() {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPopularVideos()
            .then((data) => setVideos(data.map(transformVideo)))
            .catch(console.error);
    }, []);

    return { videos, error };
}
