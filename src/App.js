import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Resume from './components/Resume';
import NavBar from './components/NavBar';
import ExtrasPage from './pages/ExtrasPage';
// import BlogsPage from './pages/BlogsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/extras" element={<ExtrasPage />} />
                    {/* <Route path="/blogs" element={<BlogsPage />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
