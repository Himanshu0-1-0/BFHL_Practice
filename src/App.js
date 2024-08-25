import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ResultsPage from './Components/ResultsPage';
function App() {
  return (
    <div className="App-cont">
      <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/results" element={<ResultsPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
