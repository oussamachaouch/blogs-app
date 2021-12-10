import Footer from './partials/footer';
import Nav from './partials/nav';
import Home from './component/home';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
