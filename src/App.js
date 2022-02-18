import './index.css';
import './App.css';
// import Particles from 'react-particles-js';
// import particlesConfig from './config/particlesConfig';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className='dark:bg-slate-900'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
    
  );
}

export default App;
