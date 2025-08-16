// templates/ModernCV4.js
import React from "react";

function ModernCV4({ data }) {
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
            fontFamily: "Segoe UI, sans-serif",
            color: "#333",
            backgroundColor: "#f4f6f8",
            padding: "40px",
            maxWidth: "1000px",
            margin: "0 auto"
        }}>
            {/* Header */}
            <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "40px"
            }}>
                {profileImage && (
                    <img
                        src={profileImage}
                        alt="Profile"
                        style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "10px",
                            objectFit: "cover",
                            marginRight: "30px",
                            boxShadow: "0 0 8px rgba(0,0,0,0.1)"
                        }}
                    />
                )}
                <div>
                    <h1 style={{
                        fontSize: "2.5rem",
                        marginBottom: "5px",
                        fontWeight: "700"
                    }}>{fullName}</h1>
                    <p style={{ fontSize: "1.2rem", color: "#777" }}>{title}</p>
                </div>
            </div>

            {/* Grid Layout */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "30px"
            }}>
                <ColorCard color="#4a90e2" title="Contact">
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Email:</strong> {email}</p>
                    {github && (
                        <p><strong>GitHub:</strong> <a href={github} style={{ color: "#4a90e2" }}>{github}</a></p>
                    )}
                    {linkedin && (
                        <p><strong>LinkedIn:</strong> <a href={linkedin} style={{ color: "#4a90e2" }}>{linkedin}</a></p>
                    )}
                </ColorCard>

                <ColorCard color="#50e3c2" title="Profile Summary">
                    <p>{profileSummary}</p>
                </ColorCard>

                <ColorCard color="#f5a623" title="Education">
                    <ul>
                        {education?.map((edu, idx) => (
                            <li key={idx}>
                                <strong>{edu.years}:</strong> {edu.institution}, {edu.degree}
                            </li>
                        ))}
                    </ul>
                </ColorCard>

                <ColorCard color="#d0021b" title="Work Experience">
                    {experience?.map((exp, idx) => (
                        <ExperienceBlock
                            key={idx}
                            company={exp.company}
                            years={exp.years}
                            bullets={exp.bullets}
                        />
                    ))}
                </ColorCard>

                <ColorCard color="#9013fe" title="Skills">
                    <ul>
                        {skillList.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                </ColorCard>

                <ColorCard color="#7ed321" title="Languages">
                    <ul>
                        {languages?.map((lang, idx) => (
                            <li key={idx}>{lang.name}: {lang.level}</li>
                        ))}
                    </ul>
                </ColorCard>

                <ColorCard color="#b8e986" title="Projects">
                    <ul>
                        {projects?.map((proj, idx) => (
                            <li key={idx}><strong>{proj.name}</strong>: {proj.description}</li>
                        ))}
                    </ul>
                </ColorCard>

                <ColorCard color="#4a4a4a" title="References">
                    <ul>
                        {references?.map((ref, idx) => (
                            <li key={idx}>{ref.name} — {ref.contact}</li>
                        ))}
                    </ul>
                </ColorCard>
            </div>
        </div>
    );
}

function ColorCard({ title, color, children }) {
    return (
        <div style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            overflow: "hidden"
        }}>
            <div style={{
                backgroundColor: color,
                color: "#fff",
                padding: "10px 20px",
                fontWeight: "bold",
                fontSize: "1.1rem"
            }}>
                {title}
            </div>
            <div style={{ padding: "20px" }}>
                {children}
            </div>
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

export default ModernCV4;
