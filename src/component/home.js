
import Blog from './blog';
// import Triangle from '../assets/svg/triangle';
const Home = () => {
    return ( 
        <div className="home">
        <div className="HomeHeader">
            <div className="HomeHeaderChild1">
                <h1 className="blogName">BlogTech</h1>
                <div className="homeText">
                    <span>All tech news in our blog , By passionate and experts people in all tech fields</span>
                </div>
            </div>
            <div className="HomeHeaderChild2">
                <div className="HomeHeaderChild21">
                   {/* <Triangle className="TriangleShape" /> */}
                </div>
            </div>
        </div>
        <Blog />
        </div>
     );
}
 
export default Home;