import { loginWithGoogle, logout } from '../hooks/useAuth';

import MyPageLoggedIn from '../components/MyPage/MyPageLoggedIn';
import MyPageLoggedOut from '../components/MyPage/MyPageLoggedOut';
import SideBar from '../components/SideBar/SideBar';
import { useAuthContext } from '../hooks/useAuthContext';

const MyPage = () => {
    const { currentUser, loading } = useAuthContext(); // 로그인 상태 확인

    const handleLogin = async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            console.error('로그인 실패', error);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('로그아웃 실패', error);
        }
    };

    if (loading) return <div className="error-message">Loading...</div>; // 로딩 중일 때 화면

    return (
        <>
            <SideBar />
            <div className="pt-14 ml-[72px]">
                {currentUser ? (
                    <MyPageLoggedIn currentUser={currentUser} onLogout={handleLogout} />
                ) : (
                    <MyPageLoggedOut onLogin={handleLogin} />
                )}
            </div>
        </>
    );
};

export default MyPage;
