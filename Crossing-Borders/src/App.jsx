import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import LigasEuropeas from './views/ligas/LigasEuropeas';
import LigasAmericanas from './views/ligas/LigasAmericanas';
import Mundial from './views/ligas/Mundial';
import Detail from './views/detail/Detail';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/Home' element={<Home />} />
          <Route exact path="/ligas-europeas" element={<LigasEuropeas />}></Route>
          <Route exact path="/ligas-america" element={<LigasAmericanas />}></Route>
          <Route exact path="/mundial" element={<Mundial />}></Route>
          <Route exact path="/details/:codigo" element={<Detail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
