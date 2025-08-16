import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import SimpleCV1 from "./templates/SimpleCV1";
import SimpleCV2 from "./templates/SimpleCV2";
import SimpleCV3 from "./templates/SimpleCV3";
import SimpleCV4 from "./templates/SimpleCV4";
import SimpleCV5 from "./templates/SimpleCV5";

import ModernCV1 from "./templates/ModernCV1";
import ModernCV2 from "./templates/ModernCV2";
import ModernCV3 from "./templates/ModernCV3";
import ModernCV4 from "./templates/ModernCV4";
import ModernCV5 from "./templates/ModernCV5";

function CVPreview() {
  const navigate = useNavigate();
  const [cvData, setCvData] = useState(null);
  const cvRef = useRef();

  useEffect(() => {
    const data = localStorage.getItem("userCVs");
    if (data) {
      const cvs = JSON.parse(data);
      const latestCV = cvs[cvs.length - 1];

      // Restore image from sessionStorage if available
      const imageData = sessionStorage.getItem("profileImageData");
      if (imageData) {
        latestCV.profileImage = imageData;
        sessionStorage.removeItem("profileImageData");
      }

      setCvData(latestCV);
    } else {
      navigate("/cv-form");
    }
  }, [navigate]);

  if (!cvData) return null;

  const simpleTemplates = [SimpleCV1, SimpleCV2, SimpleCV3, SimpleCV4, SimpleCV5];
  const modernTemplates = [ModernCV1, ModernCV2, ModernCV3, ModernCV4, ModernCV5];

  const TemplateComponent =
    cvData.cvType === "modern"
      ? modernTemplates[cvData.templateId]
      : simpleTemplates[cvData.templateId];

  const handleDownload = async () => {
    if (!cvRef.current) return;

    try {
      const canvas = await html2canvas(cvRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${cvData.fullName}_CV.pdf`);

      // Store metadata only (no base64)
      const storedPDFs = JSON.parse(localStorage.getItem("userPDFs")) || [];
      storedPDFs.push({
        name: `${cvData.fullName}_CV.pdf`,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem("userPDFs", JSON.stringify(storedPDFs));
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px" }}>
      <div ref={cvRef} style={{ padding: "20px", backgroundColor: "#fff" }}>
        <TemplateComponent data={cvData} />
      </div>

      <button
        onClick={handleDownload}
        style={{
          margin: "20px auto",
          display: "block",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Download & Save CV
      </button>
    </div>
  );
}

export default CVPreview;
