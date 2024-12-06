import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { Provider } from "react-redux";
import store from './redux/store';
import QuizPage from './pages/QuizPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      <Provider store={store}>  
        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path="/quiz/:id" element={<QuizPage />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
