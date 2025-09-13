import Blog from './blog';
import Header from '../partials/header';
import News from './news';

const Home = () => {
    return ( 
        <div className="home">
            <Header />
            <div className="content">
                <News />
                <Blog />
            </div>
            
        </div>
     );
}
 
export default Home;