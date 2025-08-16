import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [savedPDFs, setSavedPDFs] = useState([]);
  const [savedCVs, setSavedCVs] = useState([]);

  useEffect(() => {
    const pdfs = JSON.parse(localStorage.getItem("userPDFs")) || [];
    const cvs = JSON.parse(localStorage.getItem("userCVs")) || [];
    setSavedPDFs(pdfs);
    setSavedCVs(cvs);
  }, []);

  const handleDownload = (pdf) => {
    const link = document.createElement("a");
    link.href = pdf.data;
    link.download = pdf.name;
    link.click();
  };

  const handlePreview = (index) => {
    const selectedCV = savedCVs[index];
    if (selectedCV) {
      localStorage.setItem("selectedCV", JSON.stringify(selectedCV));
      navigate("/cv-preview");
    }
  };

  return (
    <div style={{
      maxWidth: "900px",
      margin: "50px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>📂 Dashboard</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "40px" }}>
        Welcome to your CV Builder Dashboard!  
        Choose what you want to do next:
      </p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginBottom: "40px",
      }}>
        <button onClick={() => navigate("/")} style={buttonStyle}>🏠 Home</button>
        <button onClick={() => navigate("/template")} style={buttonStyle}>🎨 Select Template</button>
        <button onClick={() => navigate("/cv-form")} style={buttonStyle}>✍️ Fill CV Form</button>
        <button onClick={() => navigate("/cv-preview")} style={buttonStyle}>👀 Preview CV</button>
      </div>

      {savedPDFs.length > 0 && (
        <div>
          <h2>Saved CVs</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {savedPDFs.map((pdf, idx) => (
              <li key={idx} style={{
                marginBottom: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f1f1f1",
                padding: "10px 15px",
                borderRadius: "8px"
              }}>
                <div style={{ textAlign: "left" }}>
                  <strong>{pdf.name}</strong><br />
                  <small>Created: {new Date(pdf.createdAt).toLocaleString()}</small>
                </div>
                <div>
                  <button onClick={() => handleDownload(pdf)} style={downloadBtn}>Download</button>
                  <button onClick={() => handlePreview(idx)} style={previewBtn}>Preview</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: "12px 20px",
  fontSize: "1rem",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s",
};

const downloadBtn = {
  padding: "6px 12px",
  fontSize: "0.9rem",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#28a745",
  color: "#fff",
  cursor: "pointer",
  marginRight: "10px"
};

const previewBtn = {
  padding: "6px 12px",
  fontSize: "0.9rem",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#17a2b8",
  color: "#fff",
  cursor: "pointer"
};

export default Dashboard;
