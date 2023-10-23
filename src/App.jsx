import "./App.css";
import UseState from "./components/useState";
import UseEffect from "./components/useEffect";
import UseRef from "./components/UseRef";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<UseState />} />
          <Route path="UseEffect" element={<UseEffect />} />
          <Route path="UseRef" element={<UseRef />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
