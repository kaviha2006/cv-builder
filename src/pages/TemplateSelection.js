import React from "react";
import { useNavigate } from "react-router-dom";

// Import all template components
import SimpleCV1 from './templates/SimpleCV1';
import SimpleCV2 from './templates/SimpleCV2';
import SimpleCV3 from './templates/SimpleCV3';
import SimpleCV4 from './templates/SimpleCV4';
import SimpleCV5 from './templates/SimpleCV5';
import ModernCV1 from './templates/ModernCV1';
import ModernCV2 from './templates/ModernCV2';
import ModernCV3 from './templates/ModernCV3';
import ModernCV4 from './templates/ModernCV4';
import ModernCV5 from './templates/ModernCV5';

function TemplateSelection() {
  const navigate = useNavigate();

  const simpleCVs = [
    { id: 0, name: "Simple CV 1", thumbnail: "https://marketplace.canva.com/EAGB2-hwc2A/1/0/1131w/canva-minimalist-white-and-grey-professional-resume-7wI4I6L9Vfc.jpg", component: SimpleCV1 },
    { id: 1, name: "Simple CV 2", thumbnail: "https://www.my-resume-templates.com/wp-content/uploads/2024/01/internship-resume-sample-116-350x495.jpg", component: SimpleCV2 },
    { id: 2, name: "Simple CV 3", thumbnail: "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/383/persistent-resource/santiago-resume-templates.jpg?v=1656070649", component: SimpleCV3 },
    { id: 3, name: "Simple CV 4", thumbnail: "https://resumegenius.com/wp-content/uploads/work-resume-template-orange.png", component: SimpleCV4 },
    { id: 4, name: "Simple CV 5", thumbnail: "https://cdn-blog.novoresume.com/articles/one-page-resume/one-page-serif-google-doc-resume-template.png", component: SimpleCV5 }
  ];

  const modernCVs = [
    { id: 0, name: "Modern CV 1", thumbnail: "https://marketplace.canva.com/EAGQ-IIGNa0/1/0/1131w/canva-modern-professional-cv-resume-RZAonb9ZjgE.jpg", component: ModernCV1 },
    { id: 1, name: "Modern CV 2", thumbnail: "https://resumegenius.com/wp-content/uploads/bold-resume-template-ms-word.png?w=1400", component: ModernCV2 },
    { id: 2, name: "Modern CV 3", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMeGRi0HvKyeL0MPgGtF0jKTEObyxGIeuKg&s", component: ModernCV3 },
    { id: 3, name: "Modern CV 4", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSxqzhhkcHnPzo52llelqj1fePvNJuGAseA&s", component: ModernCV4 },
    { id: 4, name: "Modern CV 5", thumbnail: "https://instaresume.io/template-preview/200kb/LightPreview_200kb.png", component: ModernCV5 }
  ];

  const handleSelect = (type, tpl) => {
    localStorage.setItem("cvType", type);
    localStorage.setItem("templateId", tpl.id);
    navigate("/cv-form");
  };

  const TemplateCard = ({ tpl, type, color }) => (
    <div
      onClick={() => handleSelect(type, tpl)}
      style={{
        border: `2px solid ${color}`,
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
        width: "150px",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      role="button"
      tabIndex={0}
    >
      <img
        src={tpl.thumbnail}
        alt={tpl.name}
        style={{ width: "100%", borderRadius: "5px" }}
      />
      <p style={{ marginTop: "8px", fontWeight: "bold" }}>{tpl.name}</p>
    </div>
  );

  return (
    <div style={{ maxWidth: "1000px", margin: "50px auto", textAlign: "center" }}>
      <h2 style={{ marginBottom: "30px" }}>✨ Select a CV Template</h2>

      <h3>📄 Simple CVs</h3>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {simpleCVs.map((tpl) => (
          <TemplateCard key={tpl.id} tpl={tpl} type="simple" color="#007BFF" />
        ))}
      </div>

      <h3 style={{ marginTop: "40px" }}>🚀 Modern CVs</h3>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {modernCVs.map((tpl) => (
          <TemplateCard key={tpl.id} tpl={tpl} type="modern" color="#28a745" />
        ))}
      </div>
    </div>
  );
}

export default TemplateSelection;
