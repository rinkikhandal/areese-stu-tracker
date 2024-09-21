import { Route, Routes } from "react-router-dom";

import Dashboard from "./Components/main/Dashboard";
import Home from "./Components/Home";
import Batch from "./Components/main/Batch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/batch/:id" element={<Batch />} />
      </Routes>
    </>
  );
}

export default App;
