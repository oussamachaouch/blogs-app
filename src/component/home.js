import Blog from './blog';
import Header from '../partials/header';

const Home = () => {
    return ( 
        <div className="home">
            <Header />
            <Blog />
        </div>
     );
}
 
export default Home;