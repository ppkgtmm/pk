import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/churn-prediction" element={<Detail name="churnPrediction" />} />
      </Routes>
    </HashRouter>

  );
}

export default App;
