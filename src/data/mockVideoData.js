const mockVideoData = Array.from({ length: 15 }, (_, i) => ({
    videoId: i + 1,
    username: `동숲거주자${i + 1}`,
    title: `흘러가는대로 살고싶은 브금 #${i + 1}`,
    views: `${(Math.random() * 100).toFixed(0)}만회`,
    uploadedAt: `${Math.floor(Math.random() * 12) + 1}개월 전`,
}));

export default mockVideoData;
