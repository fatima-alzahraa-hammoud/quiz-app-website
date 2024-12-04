import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
