import ThemeToggleButton from './ThemeToggleButton';
import moonIcon from '../../assets/moon-icon.svg';
import sunIcon from '../../assets/sun-icon.svg';
import userProfile from '../../assets/user-profile.jpg';

const HeaderUserMenu = () => {
    return (
        <div className="flex items-center">
            <ThemeToggleButton />

            <div className="flex px-1">
                <button className="mx-2 w-8 h-8 rounded-full overflow-hidden focus:shadow-[0_0_0_1px_#1c62b9]">
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
