import moonIcon from '../assets/moon-icon.svg';
import searchIcon from '../assets/search-icon.svg';
import sunIcon from '../assets/sun-icon.svg';
import textInputAssistantImg from '../assets/text-input-assistant.png';
import userProfile from '../assets/user-profile.jpg';
import voiceSearchIcon from '../assets/voice-search-icon.svg';

const Header = () => {
    return (
        <header>
            <div className="px-4 py-0 flex items-center justify-between">
                <a href="#" className="logo-padding p-">
                    <img src="/yt-logo.svg" alt="로고"></img>
                </a>

                <div className="relative flex items-center basis-[732px] shrink grow-0">
                    <div className="flex items-center flex-1 ml-10 h-10 focus-within:ml-0">
                        <div className="search-input-container focus-within:border-r focus-within:border-[#1c62b9] focus-within:pl-14 focus-within:shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                            <form action="/" className="flex flex-1 h-6">
                                <input
                                    type="text"
                                    className="search-input w-full peer outline-none"
                                    placeholder="검색"
                                />
                                <div className="absolute h-5 w-5 left-5 top-1/2 -translate-y-1/2 hidden peer-focus:block">
                                    <img className="w-full h-full" src={searchIcon} alt="검색 아이콘" />
                                </div>
                            </form>

                            <button className="text-input-assistant-button p-1">
                                <img src={textInputAssistantImg} alt="텍스트 입력 보조 키보드" />
                            </button>
                        </div>

                        <button className="search-button" type="submit" title="검색" aria-label="검색 버튼">
                            <div className="flex w-6 h-6">
                                <img className="w-full h-full" src={searchIcon} alt="검색 아이콘" />
                            </div>
                        </button>
                    </div>

                    <div className="rounded-full ml-3 bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.15)] relative group">
                        <button className="w-10 h-10 flex items-center justify-center relative">
                            <div>
                                <img className="w-full h-full" src={voiceSearchIcon} alt="음성 검색 아이콘" />
                            </div>
                        </button>

                        <div className="tooltip-voice-search">음성으로 검색</div>
                    </div>
                </div>

                <div className="flex items-center">
                    <button className="flex items-center mr-2 p-2 rounded-3xl bg-gray-100 hover:bg-[rgba(0,0,0,0.15)]">
                        <img className="w-full h-full" src={moonIcon} alt="" />
                    </button>

                    <div className="flex px-1">
                        <button className="mx-2 w-8 h-8 rounded-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                draggable="false"
                                src={userProfile}
                                alt="사용자 프로필 이미지"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
