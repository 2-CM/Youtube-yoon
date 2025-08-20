import { Link } from 'react-router-dom';

const HeaderLogo = () => {
    return (
        <Link to="/" className="logo-padding flex-shrink-0">
            <img
                src="/yt-logo-on-light.svg"
                className="block dark:hidden"
                draggable="false"
                alt="라이트 모드 로고"
            ></img>
            <img src="/yt-logo-on-dark.svg" className="hidden dark:block" draggable="false" alt="다크 모드 로고"></img>
        </Link>
    );
};

export default HeaderLogo;
