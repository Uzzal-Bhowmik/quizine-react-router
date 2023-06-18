import "./Home.css";
import TopBanner from '../TopBanner/TopBanner';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

const Home = () => {
    const topics = useLoaderData().data;

    return (
        <div>
            {/* Top Banner */}
            <TopBanner />


            {/* Topics */}
            <div id='topics' className='topics p-2'>
                <div className='text-center'>
                    <h1 className=''>Learning <span style={{ color: "var(--primary-color)" }}>Topics</span></h1>
                    <p className='text-muted fw-semibold fs-6 mt-3'>Limitless Learning, Infinite Possibilities!</p>
                </div>

                <div className='row mx-auto mt-5 mb-5' style={{ width: "95%" }}>
                    {
                        topics.map(topic => <TopicCard key={topic.id} topic={topic} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;