import LoginButton from '../LoginButton.jsx';
import ThemeToggleButton from './ThemeToggleButton';
import UserProfile from './UserProfile.jsx';
import { loginWithGoogle } from '../../hooks/useAuth';
import { useAuthContext } from '../../hooks/useAuthContext';

const HeaderUserMenu = () => {
    const { currentUser } = useAuthContext();

    const handleLogin = async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            console.error('로그인 실패', error);
        }
    };

    return (
        <div className="flex items-center ml-4">
            <ThemeToggleButton />
            <div className="flex items-center ml-2">
                {currentUser ? (
                    <UserProfile photoURL={currentUser.photoURL || ''} />
                ) : (
                    <LoginButton onLogin={handleLogin} />
                )}
            </div>
        </div>
    );
};

export default HeaderUserMenu;
