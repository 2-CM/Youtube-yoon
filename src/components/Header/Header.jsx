import HeaderLogo from './HeaderLogo';
import HeaderSearchBar from './HederSearchBar';
import HeaderUserMenu from './HeaderUserMenu';

const Header = () => {
    return (
        <header className="fixed w-full top-0 bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(15,15,15,0.8)] backdrop-blur-2xl z-10">
            <div className="px-4 py-0 flex items-center justify-between">
                <HeaderLogo />
                <HeaderSearchBar />
                <HeaderUserMenu />
            </div>
        </header>
    );
};

export default Header;
