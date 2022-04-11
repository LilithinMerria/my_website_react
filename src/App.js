import './css/index.css'
import Home from './components/Home';
import Resume from './components/Resume';
import { Route, Routes } from 'react-router';
import Projects from './components/Projects';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}

export default App;
