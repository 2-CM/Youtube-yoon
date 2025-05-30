import searchIcon from '../assets/search-icon.svg';
import textInputAssistantImg from '../assets/text-input-assistant.png';

const Header = () => {
    return (
        <header>
            <div className="px-4 py-0 flex items-center justify-between">
                <a href="#" className="logo-padding">
                    <img src="/yt-logo.svg" alt="로고"></img>
                </a>

                <div className="flex items-center basis-[732px] shrink grow-0">
                    <div className="search-box flex items-center flex-1 ml-10 h-10">
                        <div className="input-box">
                            <form action="/" className="search-form flex flex-1 h-6">
                                <input type="text" className="search-input w-full" placeholder="검색" />
                            </form>

                            <button className="text-input-assistant-btn p-1">
                                <img src={textInputAssistantImg} alt="텍스트 입력 보조 키보드" />
                            </button>
                        </div>

                        <button className="search-btn" type="submit" title="검색">
                            <div className="flex w-6 h-6">
                                <img className="w-full h-full" src={searchIcon} alt="돋보기 아이콘" />
                            </div>
                        </button>
                    </div>

                    <div className="border">마이크 버튼</div>
                </div>

                <div>사용자탭</div>
            </div>
        </header>
    );
};

export default Header;
