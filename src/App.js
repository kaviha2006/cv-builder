// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TemplateSelection from "./pages/TemplateSelection";
import CVForm from "./pages/CVForm";
import CVPreview from "./pages/CVPreview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<TemplateSelection />} />
        <Route path="/cv-form" element={<CVForm />} />
        <Route path="/cv-preview" element={<CVPreview />} />
      </Routes>
    </Router>
  );
}

export default App;
