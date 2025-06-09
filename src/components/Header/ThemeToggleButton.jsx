import moonIcon from '../../assets/moon-icon.svg';
import sunIcon from '../../assets/sun-icon.svg';
import { useState } from 'react';

const ThemeToggleButton = () => {
    const [theme, setTheme] = useState('light');

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button
            onClick={handleToggle}
            className={`w-14 h-8 flex items-center p-1 mr-2 border border-white rounded-full transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
            }`}
        >
            <div
                className={`w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                }`}
            >
                <img
                    src={theme === 'dark' ? moonIcon : sunIcon}
                    alt="테마 아이콘"
                    className="w-4 h-4"
                    draggable="false"
                />
            </div>
        </button>
    );
};

export default ThemeToggleButton;
