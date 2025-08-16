// pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('https://craft-cv.com/assets/images/cv-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          border: "2px solid #007BFF",
          borderRadius: "10px",
          padding: "40px 60px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>📝 CV Builder</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Create a professional CV in minutes. <br />
          Choose a template, fill in your details, and download your CV.
        </p>

        <button
          onClick={() => navigate("/template")}
          style={{
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#007BFF")
          }
        >
          🚀 Create My CV
        </button>
      </div>
    </div>
  );
}

export default Home;
