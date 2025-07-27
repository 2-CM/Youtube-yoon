import { CircleUserRound } from 'lucide-react';

const LoginButton = ({ onLogin }) => {
    return (
        <button className="login-button" onClick={onLogin} aria-label="로그인 버튼">
            <CircleUserRound className="mr-2 -ml-1" strokeWidth={1} />
            <span className="font-medium text-sm">로그인</span>
        </button>
    );
};

export default LoginButton;
