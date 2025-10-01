//import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./partials/footer";
import Nav from "./partials/nav";
import Home from "./component/home";
import "./styles/App.css";
import NotFound from "./component/common/notFound";
import About from "./component/about";
import ShowBlog from "./component/showBlog";
import NewBlog from "./component/newBlog";
import Newsletter from "./component/newsletter";
import ScrollToTop from "./component/common/scrollToTop";
import Unsubscribed from "./component/unsubscibed";
// import TranslationLoader from "./component/common/translationLoader";
// import Loader from "./component/common/loader";
// import { TranslationProvider, useTranslationContext } from "./context/translationProvider";

function App() {
  // const { loading } = useTranslationContext();
  return (
    <div className="App">
      {/* {loading ? <Loader /> : */}
      <div>
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
               <Footer />
          </BrowserRouter>
      </div>
      {/* } */}
     
    </div>
  );
}

// function App() {
//   return (
//     <TranslationProvider>
//       <AppContent />
//     </TranslationProvider>
//   );
// }

export default App;
