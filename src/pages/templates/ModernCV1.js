// templates/ModernCV1.js
import React from "react";

function ModernCV1({ data }) {
  const {
    fullName,
    title,
    profileImage,
    email,
    phone,
    github,
    linkedin,
    profileSummary,
    education,
    experience,
    skills,
    languages,
    projects,
    references
  } = data;

  const skillList = skills ? skills.split(",").map(s => s.trim()) : [];

  return (
    <div style={{
      display: "flex",
      fontFamily: "Segoe UI, sans-serif",
      color: "#333",
      backgroundColor: "#f9f9f9",
      maxWidth: "1000px",
      margin: "0 auto",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      {/* Sidebar */}
      <div style={{
        width: "30%",
        backgroundColor: "#4a90e2",
        color: "#fff",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {/* Profile Image */}
        {profileImage && (
          <img
            src={profileImage}
            alt="Profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 0 8px rgba(0,0,0,0.2)",
              marginBottom: "20px"
            }}
          />
        )}
        <h2 style={{ fontSize: "1.5rem", marginBottom: "5px" }}>{fullName}</h2>
        <p style={{ fontSize: "1rem", marginBottom: "30px" }}>{title}</p>

        <SidebarSection title="Contact">
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Email:</strong> {email}</p>
          {github && (
            <p><strong>GitHub:</strong> <a href={github} style={{ color: "#fff", textDecoration: "underline" }}>{github}</a></p>
          )}
          {linkedin && (
            <p><strong>LinkedIn:</strong> <a href={linkedin} style={{ color: "#fff", textDecoration: "underline" }}>{linkedin}</a></p>
          )}
        </SidebarSection>

        <SidebarSection title="Skills">
          <ul>
            {skillList.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </SidebarSection>

        <SidebarSection title="Languages">
          <ul>
            {languages?.map((lang, idx) => (
              <li key={idx}>{lang.name}: {lang.level}</li>
            ))}
          </ul>
        </SidebarSection>
      </div>

      {/* Main Content */}
      <div style={{ width: "70%", padding: "40px" }}>
        <MainSection title="Profile Summary">
          <p>{profileSummary}</p>
        </MainSection>

        <MainSection title="Work Experience">
          {experience?.map((exp, idx) => (
            <ExperienceBlock
              key={idx}
              company={exp.company}
              years={exp.years}
              bullets={exp.bullets}
            />
          ))}
        </MainSection>

        <MainSection title="Education">
          <ul>
            {education?.map((edu, idx) => (
              <li key={idx}>
                <strong>{edu.years}:</strong> {edu.institution}, {edu.degree}
              </li>
            ))}
          </ul>
        </MainSection>

        <MainSection title="Projects">
          <ul>
            {projects?.map((proj, idx) => (
              <li key={idx}><strong>{proj.name}</strong>: {proj.description}</li>
            ))}
          </ul>
        </MainSection>

        <MainSection title="References">
          <ul>
            {references?.map((ref, idx) => (
              <li key={idx}>{ref.name} — {ref.contact}</li>
            ))}
          </ul>
        </MainSection>
      </div>
    </div>
  );
}

function SidebarSection({ title, children }) {
  return (
    <div style={{ marginBottom: "25px", width: "100%" }}>
      <h3 style={{
        fontSize: "1rem",
        marginBottom: "10px",
        borderBottom: "1px solid rgba(255,255,255,0.3)",
        paddingBottom: "5px"
      }}>{title}</h3>
      {children}
    </div>
  );
}

function MainSection({ title, children }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2 style={{
        fontSize: "1.2rem",
        marginBottom: "15px",
        color: "#4a90e2",
        borderBottom: "2px solid #eee",
        paddingBottom: "5px"
      }}>{title}</h2>
      {children}
    </div>
  );
}

function ExperienceBlock({ company, years, bullets }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p><strong>{company}</strong> ({years})</p>
      <ul>
        {bullets.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ModernCV1;
