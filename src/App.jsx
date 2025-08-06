import './App.css';

import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import SearchResult from './pages/SearchResult';
import VideoDetail from './pages/VideoDetail';

function App() {
    return (
        <AuthProvider>
            <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/video/:videoId" element={<VideoDetail />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/search" element={<SearchResult />} />
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;
