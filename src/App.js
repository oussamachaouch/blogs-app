import Footer from "./partials/footer";
import Nav from "./partials/nav";
import Home from "./component/home";
import "./styles/App.css";
import NotFound from "./component/common/notFound";
import About from "./component/about";
import ShowBlog from "./component/showBlog";
import NewBlog from "./component/newBlog";
import Newsletter from "./component/newsletter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/common/scrollToTop";
import Unsubscribed from "./component/unsubscibed";

function App() {
  return (
    <div className="App">
      
      <div>
        {
          <BrowserRouter>
          <ScrollToTop />
          <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Home />} />
              <Route path="/showblog/:id" element={<ShowBlog />} />
              <Route path="/about" element={<About />} />
              <Route path="/newBlog" element={<NewBlog />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/unsubscribed/:token" element={<Unsubscribed />} />
              <Route path="**" element={<NotFound />} />
            </Routes>
          </BrowserRouter>|| <NotFound /> 
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
