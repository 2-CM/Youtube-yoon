export const addToWatchHistory = (video) => {
    const history = JSON.parse(localStorage.getItem('watchHistory')) || [];
    // 중복 제거 + 최신 순 정렬
    const updated = [video, ...history.filter((v) => v.videoId !== video.videoId)];
    localStorage.setItem('watchHistory', JSON.stringify(updated.slice(0, 20))); // 최근 20개만 저장
};

export const getWatchHistory = () => {
    return JSON.parse(localStorage.getItem('watchHistory')) || [];
};
