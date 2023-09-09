import './App.css'
import Home from './views/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/Home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
