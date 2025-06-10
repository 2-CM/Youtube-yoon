import { CircleUserRound, House } from 'lucide-react';

import SideBarItem from './SideBarItem';

const SideBar = () => {
    return (
        <div className="fixed left-0 bottom-0 top-14 w-[72px] px-1">
            <div className="mt-1 flex flex-col items-center w-full">
                <SideBarItem icon={House} href="/" alt="홈 버튼" text="홈" />
                <SideBarItem icon={CircleUserRound} href="#" alt="마이페이지 버튼" text="내 페이지" />
            </div>
        </div>
    );
};

export default SideBar;
