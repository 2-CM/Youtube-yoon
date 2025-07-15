export function formatViewCount(viewCount) {
    const count = Number(viewCount); // 숫자로 변환
    if (isNaN(count)) return ''; // 숫자가 아니면 빈 문자열 반환

    if (count < 1000) return `${count}회`; // 0~999
    if (count < 10000) return `${(count / 1000).toFixed(1)}천회`; // 1천~9,999
    if (count < 100000000) return `${Math.floor(count / 10000)}만회`; // 1만~9천만

    return `${Math.floor(count / 100000000)}억회`; // 1억 이상
}

export function formatTimeAgo(dateString) {
    const now = new Date(); // 현재 시간
    const past = new Date(dateString); // 업로드 시간
    const diffSeconds = Math.floor((now - past) / 1000); // 현재와 과거 시간의 차이를 초 단위로 계산

    if (diffSeconds < 60) return `${diffSeconds}초 전`; // 60초 미만
    if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}분 전`; // 1분~59분
    if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}시간 전`; // 1시간~23시간
    if (diffSeconds < 604800) return `${Math.floor(diffSeconds / 86400)}일 전`; // 1일~6일
    if (diffSeconds < 2592000) return `${Math.floor(diffSeconds / 604800)}주 전`; // 1주~4주
    if (diffSeconds < 31536000) return `${Math.floor(diffSeconds / 2592000)}개월 전`; // 1개월~11개월

    return `${Math.floor(diffSeconds / 31536000)}년 전`; // 1년 이상
}
