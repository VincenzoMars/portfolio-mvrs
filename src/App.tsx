import { Routes, Route, Link } from "react-router-dom";
import DesignSystem from "./pages/design-system/DesignSystem";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="design" element={<DesignSystem />} />
      </Routes>
    </div>
  );
}

export default App;
