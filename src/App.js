import './css/index.css'
import Home from './components/Home';
import Resume from './components/Resume';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  );
}

export default App;
