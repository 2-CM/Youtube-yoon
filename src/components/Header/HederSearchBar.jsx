import { Mic, Search, X } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HeaderSearchBar = () => {
    // 검색어 상태 관리
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    // 검색 실행 시 호출
    const handleSubmit = (e) => {
        e.preventDefault(); // form 기본 제출 방지
        if (!query.trim()) return; // 공백만 입력된 경우 무시 (양쪽 공백 제거)
        navigate(`/search?q=${encodeURIComponent(query.trim())}`); // 검색 결과 페이지로 이동
    };

    return (
        <div className="flex items-center basis-[732px] shrink grow-0">
            <form onSubmit={handleSubmit} className="flex flex-1 items-center h-10 group">
                <div className={`search-input-container`}>
                    {/* 검색 아이콘 */}
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none hidden group-focus-within:block">
                        <Search className="h-5 w-5" strokeWidth={1} alt="검색 아이콘" />
                    </div>

                    {/* 검색창 */}
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="search-input w-full peer outline-none bg-inherit"
                        placeholder="검색"
                    />

                    {/* 입력 초기화 버튼 */}
                    {query && (
                        <button type="button" className="clear-button" aria-label="입력 초기화 버튼">
                            <X strokeWidth={1} width={30} height={30} />
                        </button>
                    )}

                    {/* 검색 버튼 */}
                    <button
                        type="submit"
                        className="search-button dark:bg-white/10 dark:border-[#303030] ml-2"
                        title="검색"
                        aria-label="검색 버튼"
                        onMouseDown={(e) => {
                            e.preventDefault(); // 클릭 시 포커스 이동 막기
                            e.currentTarget.form.querySelector('input')?.blur(); // input 포커스 해제
                        }}
                    >
                        <Search strokeWidth={1} alt="검색 아이콘" className="w-6 h-6" />
                    </button>
                </div>
            </form>

            {/* 음성 검색 버튼 */}
            <div className="ml-20 rounded-full bg-black/10 hover:bg-black/[0.15] relative group dark:bg-white/10 dark:hover:bg-white/20">
                <button className="w-10 h-10 flex items-center justify-center relative" aria-label="음성 검색">
                    <Mic strokeWidth={1} alt="음성 검색 아이콘" />
                </button>
                <div className="tooltip top-[48px] left-[-27px] m-2">음성으로 검색</div>
            </div>
        </div>
    );
};

export default HeaderSearchBar;
