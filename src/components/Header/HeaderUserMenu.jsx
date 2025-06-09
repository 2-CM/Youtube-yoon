import moonIcon from '../../assets/moon-icon.svg';
import sunIcon from '../../assets/sun-icon.svg';
import userProfile from '../../assets/user-profile.jpg';

const HeaderUserMenu = () => {
    return (
        <div className="flex items-center">
            <button className="flex items-center mr-2 p-2 rounded-3xl bg-gray-100 hover:bg-[rgba(0,0,0,0.15)]">
                <img className="w-full h-full" draggable="false" src={moonIcon} alt="" />
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
    );
};

export default HeaderUserMenu;
