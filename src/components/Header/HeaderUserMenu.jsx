import ThemeToggleButton from './ThemeToggleButton';
import { useNavigate } from 'react-router-dom';
import userProfile from '../../assets/user-profile.jpg';

const HeaderUserMenu = () => {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/mypage');
    };

    return (
        <div className="flex items-center">
            <ThemeToggleButton />

            <div className="flex px-1">
                <button
                    className="mx-2 w-8 h-8 rounded-full overflow-hidden focus:shadow-[0_0_0_1px_#1c62b9]"
                    onClick={handleProfileClick}
                >
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
