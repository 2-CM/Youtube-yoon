import Logout from '../assets/logout.svg';
import SideBar from '../components/SideBar/SideBar';
import UserProfile from '../assets/user-profile.jpg';

const MyPage = () => {
    return (
        <>
            <SideBar />
            <div className="mt-14 ml-[72px]">
                <div className="mypage-profile [width:calc(100%-48px)] flex m-auto">
                    <div className="mr-4 my-2 flex-shrink-0 w-[120px] h-[120px]">
                        <img className="rounded-full w-full h-full object-fill" src={UserProfile} alt="채널 사진" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="text-4xl font-bold">채널 이름</div>
                        <button className="logout-button">
                            <img className="w-4 h-4 mr-1" src={Logout} alt="로그아웃 아이콘" />
                            <span className="font-medium">로그아웃</span>
                        </button>
                    </div>
                </div>
                <div>기록</div>
            </div>
        </>
    );
};

export default MyPage;
