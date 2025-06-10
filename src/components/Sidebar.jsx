import { CircleUserRound, House } from 'lucide-react';

const SideBar = () => {
    return (
        <div className="w-[72px]">
            <div className="mt-1 flex flex-col items-center w-full">
                <div className="sidebar-item-container">
                    <a className="sidebar-item" href="/">
                        <House />
                        <span className="sidebar-text">홈</span>
                    </a>
                </div>
                <div className="sidebar-item-container">
                    <a className="sidebar-item" href="#">
                        <CircleUserRound />
                        <span className="sidebar-text">내 페이지</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
