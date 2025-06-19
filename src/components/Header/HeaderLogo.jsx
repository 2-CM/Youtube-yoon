import { Link } from 'react-router-dom';

const HeaderLogo = () => {
    return (
        <Link to="/" className="logo-padding">
            <img src="/yt-logo.svg" draggable="false" alt="로고"></img>
        </Link>
    );
};

export default HeaderLogo;
