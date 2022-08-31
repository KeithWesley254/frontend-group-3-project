import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div className="overallTop">
      <Header />
      <Routes>
        <Route exact='true' path='/' element={<HomePage />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
