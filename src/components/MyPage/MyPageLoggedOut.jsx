import LoginButton from '../LoginButton';
import { SquarePlay } from 'lucide-react';

const MyPageLoggedOut = ({ onLogin }) => {
    return (
        <div className="flex flex-col items-center justify-center pt-36 mb-4">
            <div>
                <SquarePlay width={120} height={120} strokeWidth={1} />
            </div>
            <div className="my-6 m-auto font-normal">
                <p className="text-2xl mb-4">좋아하는 동영상을 감상해 보세요.</p>
                <p className="text-sm">저장하거나 좋아요 표시한 동영상을 보려면 로그인하세요.</p>
            </div>
            <LoginButton onLogin={onLogin} />
        </div>
    );
};

export default MyPageLoggedOut;
