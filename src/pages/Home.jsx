import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';

const Home = () => {
    return (
        <>
            <Header />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <VideoCard />
            </div>
        </>
    );
};

export default Home;
