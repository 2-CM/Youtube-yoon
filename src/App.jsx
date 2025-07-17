import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import VideoDetail from './pages/VideoDetail';

function App() {
    return (
        <div className="bg-white text-black dark:bg-zinc-900 dark:text-white">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/:videoId" element={<VideoDetail />} />
                <Route path="/mypage" element={<MyPage />} />
            </Routes>
        </div>
    );
}

export default App;
