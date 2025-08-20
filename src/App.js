import Footer from "./partials/footer";
import Nav from "./partials/nav";
import Home from "./component/home";
import "./styles/App.css";
import NotFound from "./component/common/notFound";
import About from "./component/about";
import ShowBlog from "./component/showBlog";
import NewBlog from "./component/newBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <div>
        {
          <BrowserRouter>
          <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Home />} />
              <Route path="/showblog/:id" element={<ShowBlog />} />
              <Route path="/about" element={<About />} />
              <Route path="/newBlog" element={<NewBlog />} />
            </Routes>
          </BrowserRouter>|| <NotFound /> 
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
