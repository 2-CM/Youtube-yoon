export function formatViewCount(viewCount) {
    const count = Number(viewCount);
    if (isNaN(count)) return '';

    if (count < 1000) return `${count}회`;
    if (count < 10000) return `${(count / 1000).toFixed(1)}천회`;
    if (count < 100000000) return `${Math.floor(count / 10000)}만회`;

    return `${Math.floor(count / 100000000)}억회`;
}
