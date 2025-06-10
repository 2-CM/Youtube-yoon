import { CircleUserRound, House } from 'lucide-react';

const SideBar = () => {
    return (
        <div className="w-[72px]">
            <div className="mt-1 flex flex-col items-center w-full">
                <a className="sidebar-item active:" href="/">
                    <House />
                    <span className="sidebar-text">홈</span>
                </a>
                <a className="sidebar-item" href="#">
                    <CircleUserRound />
                    <span className="sidebar-text">내 페이지</span>
                </a>
            </div>
        </div>
    );
};

export default SideBar;
