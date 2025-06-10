import Header from '../components/Header/Header';
import SideBar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';

const Home = () => {
    return (
        <>
            <Header />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <VideoCard />
            </div>
        </>
    );
};

export default Home;
