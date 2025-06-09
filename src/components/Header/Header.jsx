import HeaderLogo from './HeaderLogo';
import HeaderSearchBar from './HederSearchBar';
import HeaderUserMenu from './HeaderUserMenu';

const Header = () => {
    return (
        <header className="w-full">
            <div className="px-4 py-0 flex items-center justify-between">
                <HeaderLogo />
                <HeaderSearchBar />
                <HeaderUserMenu />
            </div>
        </header>
    );
};

export default Header;
