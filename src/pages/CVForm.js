import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CVForm() {
  const navigate = useNavigate();

  const [cvType, setCvType] = useState("");
  const [templateId, setTemplateId] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    profileSummary: "",
    education: "",
    experience: "",
    skills: "",
    languages: "",
    projects: "",
    references: "",
    profileImage: null,
  });

  useEffect(() => {
    const type = localStorage.getItem("cvType");
    const id = localStorage.getItem("templateId");
    if (!type || !id) {
      navigate("/template-selection");
    }
    setCvType(type);
    setTemplateId(id);
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setFormData({ ...formData, profileImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const parseList = (text) =>
    text.split("\n").map(line => line.trim()).filter(line => line.length > 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cvData = {
      ...formData,
      cvType,
      templateId: parseInt(templateId),
      createdAt: new Date().toISOString(),

      education: parseList(formData.education).map(line => {
        const [years, institution, degree] = line.split(" - ");
        return { years: years?.trim(), institution: institution?.trim(), degree: degree?.trim() };
      }),

      experience: parseList(formData.experience).map(line => {
        const [company, years, ...bullets] = line.split(" - ");
        return {
          company: company?.trim(),
          years: years?.trim(),
          bullets: bullets.join(" - ").split(";").map(b => b.trim()).filter(b => b)
        };
      }),

      languages: parseList(formData.languages).map(line => {
        const [name, level] = line.split(":");
        return { name: name?.trim(), level: level?.trim() };
      }),

      projects: parseList(formData.projects).map(line => {
        const [name, description] = line.split(":");
        return { name: name?.trim(), description: description?.trim() };
      }),

      references: parseList(formData.references).map(line => {
        const [name, contact] = line.split(" - ");
        return { name: name?.trim(), contact: contact?.trim() };
      }),
    };

    if (formData.profileImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        sessionStorage.setItem("profileImageData", reader.result);
        finalizeCV(cvData);
      };
      reader.readAsDataURL(formData.profileImage);
    } else {
      finalizeCV(cvData);
    }
  };

  const finalizeCV = (cvData) => {
    const existingCVs = JSON.parse(localStorage.getItem("userCVs")) || [];
    existingCVs.push(cvData);
    localStorage.setItem("userCVs", JSON.stringify(existingCVs));
    sessionStorage.setItem("currentCV", JSON.stringify(cvData));
    navigate("/cv-preview");
  };

  const renderField = (label, name, type = "text", rows = null, placeholder = "") => (
    <div style={{ display: "flex", marginBottom: "15px", alignItems: "center" }}>
      <label htmlFor={name} style={{ width: "150px", fontWeight: "bold", textAlign: "left" }}>
        {label}:
      </label>
      {rows ? (
        <textarea
          name={name}
          id={name}
          rows={rows}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          style={{ flex: 1, padding: "8px" }}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          style={{ flex: 1, padding: "8px" }}
          required={["fullName", "title", "email", "phone"].includes(name)}
        />
      )}
    </div>
  );

  return (
    <div style={{
      maxWidth: "700px",
      margin: "50px auto",
      padding: "30px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Create {cvType === "modern" ? "Modern" : "Simple"} CV
      </h2>
      <form onSubmit={handleSubmit}>
        {renderField("Full Name", "fullName", "text", null, "e.g. john")}
        {renderField("Title", "title", "text", null, "e.g. UI/UX Designer")}
        {renderField("Email", "email", "email", null, "e.g. john@example.com")}
        {renderField("Phone", "phone", "text", null, "e.g. +91 9876543210")}
        {renderField("GitHub", "github", "text", null, "e.g. https://github.com/john")}
        {renderField("LinkedIn", "linkedin", "text", null, "e.g. https://linkedin.com/in/john")}
        {renderField("Profile Summary", "profileSummary", "text", 3, "Brief overview of your skills and goals")}
        {renderField("Education", "education", "text", 3, "e.g. 2020 - Anna University - B.Tech IT")}
        {renderField("Experience", "experience", "text", 3, "e.g. Google - 2021–2023 - Developed UI; Led design sprints")}
        {renderField("Skills", "skills", "text", 2, "e.g. React, Figma, JavaScript")}
        {renderField("Languages", "languages", "text", 2, "e.g. English: Fluent\nTamil: Native")}
        {renderField("Projects", "projects", "text", 3, "e.g. Portfolio Website: Built with React and GSAP")}
        {renderField("References", "references", "text", 2, "e.g. John Doe - john@example.com")}

        {cvType === "modern" && (
          <div style={{ display: "flex", marginBottom: "15px", alignItems: "center" }}>
            <label htmlFor="profileImage" style={{ width: "150px", fontWeight: "bold", textAlign: "left" }}>
              Upload Photo:
            </label>
            <input
              type="file"
              name="profileImage"
              id="profileImage"
              accept="image/*"
              onChange={handleChange}
              style={{ flex: 1 }}
            />
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>
            Preview CV
          </button>
        </div>
      </form>
    </div>
  );
}

export default CVForm;
