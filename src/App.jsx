import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/churn-prediction" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
