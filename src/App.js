import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Resume from './components/Resume';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogsPage from './pages/BlogsPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
