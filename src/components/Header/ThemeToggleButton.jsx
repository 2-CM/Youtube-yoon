import { useEffect, useState } from 'react';

import moonIcon from '../../assets/moon-icon.svg';
import sunIcon from '../../assets/sun-icon.svg';

const ThemeToggleButton = () => {
    // 새로고침해도 저장된 theme가 유지되도록 useState 초기값을 localStorage에서 가져오기
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    // theme 상태가 바뀔 때마다 'dark' 클래스를 추가하거나 제거
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    // 버튼 클릭 시 실행되는 함수
    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        // newTheme를 localStorage에 저장하여 새로고침 시에도 유지되도록 함
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            onClick={handleToggle}
            className={`w-14 h-8 flex items-center p-1 mr-2 border border-white rounded-full transition-colors duration-300 ${
                theme === 'dark' ? 'bg-black' : 'bg-gray-300'
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
