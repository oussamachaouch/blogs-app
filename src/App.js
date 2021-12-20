import Footer from './partials/footer';
import Nav from './partials/nav';
import Home from './component/home';
import './styles/App.css';
import {useRoutes} from 'hookrouter';
import Blog from './component/blog';
import NotFound from './component/common/notFound';
import About from './component/about';
import ShowBlog from './component/showBlog';

const routes = {
  '/': () => <Home />,
  '/showblog/:id': ({id}) => <ShowBlog id={id} />,
  '/about': () => <About />,
};

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <Nav />
      <div className="Container">
        {routeResult || <NotFound /> }
      </div>
      <Footer />
    </div>
  );
}

export default App;
