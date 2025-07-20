import { useEffect, useRef, useState } from 'react';

const VideoDescription = ({ views, uploadedAt, description }) => {
    // description 영역이 펼쳐진 상태인지 저장
    const [isExpanded, setIsExpanded] = useState(false);
    // description 영역의 최대 높이
    const [maxHeight, setMaxHeight] = useState('none');
    // description 텍스트 div DOM 참조
    const textRef = useRef(null);

    // isExpanded 상태가 바뀔 때마다 maxHeight 계산
    useEffect(() => {
        if (!isExpanded && textRef.current) {
            const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
            setMaxHeight(`${lineHeight * 2}px`); // 줄 높이 × 2줄
        } else {
            // 펼쳐진 상태면 제한 없이 전체 표시
            setMaxHeight('none'); // 전체 보기
        }
    }, [isExpanded]);

    return (
        <div className="video-description mt-3 bg-black/5 dark:bg-white/10 rounded-xl text-sm font-normal cursor-pointer">
            <div className="p-3 relative">
                {/* 조회수 및 업로드 날짜 표시 */}
                <div className="font-medium">
                    조회수 {views} {uploadedAt}
                </div>

                {/* description 텍스트 영역 */}
                <div
                    ref={textRef}
                    className="w-full whitespace-pre-line overflow-hidden transition-all duration-200"
                    style={{ maxHeight }}
                >
                    {description}
                </div>

                {/* 더보기/간략히 버튼 */}
                <button
                    onClick={() => setIsExpanded((prev) => !prev)}
                    className="mt-2 font-medium rounded active:bg-black/20 dark:active:bg-white/20 transition-colors"
                >
                    {isExpanded ? '간략히' : '...더보기'}
                </button>
            </div>
        </div>
    );
};

export default VideoDescription;
