import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import ChurnPrediction from './pages/ChurnPrediction';
import Home from "./Home";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/churn-prediction" element={<ChurnPrediction />} /> */}
      </Routes>
    </HashRouter>

  );
}

export default App;
