import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import VideoGrid from '../components/VideoGrid/VideoGrid';

const Home = () => {
    return (
        <>
            <Header />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <VideoGrid />
            </div>
        </>
    );
};

export default Home;
