import { Link, useLocation } from 'react-router-dom';

const SideBarItem = ({ icon: Icon, href, alt, text }) => {
    const location = useLocation();
    // 현재 URL 경로(location.pathname)와 버튼 링크(href)를 비교
    const isActive = location.pathname === href;

    return (
        <div className="sidebar-item-container">
            <Link className={`sidebar-item ${isActive ? 'text-red-500' : ''}`} to={href} aria-label={alt}>
                <Icon strokeWidth={1.5} />
                <span className="sidebar-text">{text}</span>
            </Link>
        </div>
    );
};

export default SideBarItem;
