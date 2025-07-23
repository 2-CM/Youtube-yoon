import { Mic, Search } from 'lucide-react';

import textInputAssistantImg from '../../assets/text-input-assistant.png';

const HeaderSearchBar = () => {
    return (
        <div className="relative flex items-center basis-[732px] shrink grow-0">
            <div className="flex items-center flex-1 h-10">
                <div className="search-input-container dark:bg-[#121212] dark:border-[#303030] dark:shadow-none dark:focus-within:border-[#1c62b9]">
                    <form action="/" className="flex flex-1 h-6">
                        <input
                            type="text"
                            className="search-input w-full peer outline-none bg-inherit"
                            placeholder="검색"
                        />
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 hidden peer-focus:block">
                            <Search className="h-5 w-5" strokeWidth={1} alt="검색 아이콘" />
                        </div>
                    </form>

                    <button className="text-input-assistant-button p-1">
                        <img src={textInputAssistantImg} draggable="false" alt="텍스트 입력 보조 키보드" />
                    </button>
                </div>

                <button
                    className="search-button dark:bg-white/10 dark:border-[#303030]"
                    type="submit"
                    title="검색"
                    aria-label="검색 버튼"
                >
                    <div className="flex w-6 h-6">
                        <Search strokeWidth={1} alt="검색 아이콘" />
                    </div>
                </button>
            </div>

            <div className="rounded-full ml-3 bg-black/10 hover:bg-black/[0.15] relative group dark:bg-white/10 dark:hover:bg-white/20">
                <button className="w-10 h-10 flex items-center justify-center relative">
                    <div>
                        <Mic strokeWidth={1} alt="음성 검색 아이콘" />
                    </div>
                </button>

                <div className="tooltip top-[48px] left-[-27px] m-2">음성으로 검색</div>
            </div>
        </div>
    );
};

export default HeaderSearchBar;
