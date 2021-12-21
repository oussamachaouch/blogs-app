import Footer from "./partials/footer";
import Nav from "./partials/nav";
import Home from "./component/home";
import "./styles/App.css";
import { useRoutes } from "hookrouter";
import Blog from "./component/blog";
import NotFound from "./component/common/notFound";
import About from "./component/about";
import ShowBlog from "./component/showBlog";
import NewBlog from "./component/newBlog";

const routes = {
  "/": () => <Home />,
  "/showblog/:id": ({ id }) => <ShowBlog id={id} />,
  "/blog": () => <Home />,
  "/about": () => <About />,
  "/newBlog": () => <NewBlog />,
};

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <Nav />
      {routeResult || <NotFound />}
      <Footer />
    </div>
  );
}

export default App;
