const SideBarItem = ({ icon: Icon, href, alt, text }) => {
    return (
        <div className="sidebar-item-container">
            <a className="sidebar-item" href={href}>
                <Icon strokeWidth={1.5} alt={alt} />
                <span className="sidebar-text">{text}</span>
            </a>
        </div>
    );
};

export default SideBarItem;
