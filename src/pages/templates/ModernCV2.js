// templates/ModernCV2.js
import React from "react";

function ModernCV2({ data }) {
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
            backgroundColor: "#f0f2f5",
            padding: "40px",
            maxWidth: "800px",
            margin: "0 auto"
        }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
                {profileImage && (
                    <img
                        src={profileImage}
                        alt="Profile"
                        style={{
                            width: "130px",
                            height: "130px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                            marginBottom: "20px"
                        }}
                    />
                )}
                <h1 style={{ fontSize: "2.2rem", marginBottom: "5px" }}>{fullName}</h1>
                <p style={{ fontSize: "1.1rem", color: "#666" }}>{title}</p>
            </div>

            {/* Sections */}
            <Card>
                <IconSection icon="📞" title="Contact">
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Email:</strong> {email}</p>
                    {github && (
                        <p><strong>GitHub:</strong> <a href={github} style={{ color: "#4a90e2" }}>{github}</a></p>
                    )}
                    {linkedin && (
                        <p><strong>LinkedIn:</strong> <a href={linkedin} style={{ color: "#4a90e2" }}>{linkedin}</a></p>
                    )}
                </IconSection>
            </Card>


            <Card>
                <IconSection icon="🧠" title="Profile Summary">
                    <p>{profileSummary}</p>
                </IconSection>
            </Card>

            <Card>
                <IconSection icon="🎓" title="Education">
                    <ul>
                        {education?.map((edu, idx) => (
                            <li key={idx}>
                                <strong>{edu.years}:</strong> {edu.institution}, {edu.degree}
                            </li>
                        ))}
                    </ul>
                </IconSection>
            </Card>

            <Card>
                <IconSection icon="💼" title="Work Experience">
                    {experience?.map((exp, idx) => (
                        <ExperienceBlock
                            key={idx}
                            company={exp.company}
                            years={exp.years}
                            bullets={exp.bullets}
                        />
                    ))}
                </IconSection>
            </Card>

            <Card>
                <IconSection icon="🛠️" title="Skills">
                    <ul>
                        {skillList.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                </IconSection>
            </Card>

            <Card>
                <IconSection icon="🌐" title="Languages">
                    <ul>
                        {languages?.map((lang, idx) => (
                            <li key={idx}>{lang.name}: {lang.level}</li>
                        ))}
                    </ul>
                </IconSection>
            </Card>

            <Card>
                <IconSection icon="📁" title="Projects">
                    <ul>
                        {projects?.map((proj, idx) => (
                            <li key={idx}><strong>{proj.name}</strong>: {proj.description}</li>
                        ))}
                    </ul>
                </IconSection>
            </Card>

            <Card>
                <IconSection icon="📇" title="References">
                    <ul>
                        {references?.map((ref, idx) => (
                            <li key={idx}>{ref.name} — {ref.contact}</li>
                        ))}
                    </ul>
                </IconSection>
            </Card>
        </div>
    );
}

function Card({ children }) {
    return (
        <div style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "25px",
            marginBottom: "25px"
        }}>
            {children}
        </div>
    );
}

function IconSection({ icon, title, children }) {
    return (
        <div>
            <h2 style={{
                fontSize: "1.3rem",
                marginBottom: "15px",
                color: "#4a90e2"
            }}>{icon} {title}</h2>
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

export default ModernCV2;
