// templates/ModernCV3.js
import React from "react";

function ModernCV3({ data }) {
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
            fontFamily: "'Helvetica Neue', sans-serif",
            color: "#333",
            backgroundColor: "#fff",
            padding: "40px",
            maxWidth: "900px",
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
                        fontSize: "2.8rem",
                        marginBottom: "5px",
                        fontWeight: "700",
                        letterSpacing: "1px"
                    }}>{fullName}</h1>
                    <p style={{ fontSize: "1.2rem", color: "#777" }}>{title}</p>
                </div>
            </div>

            {/* Sections */}
            <Section title="Contact">
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>
                {github && (
                    <p><strong>GitHub:</strong> <a href={github} style={{ color: "#4a90e2" }}>{github}</a></p>
                )}
                {linkedin && (
                    <p><strong>LinkedIn:</strong> <a href={linkedin} style={{ color: "#4a90e2" }}>{linkedin}</a></p>
                )}
            </Section>
            <Divider />

            <Section title="Profile Summary">
                <p>{profileSummary}</p>
            </Section>
            <Divider />

            <Section title="Education">
                <ul>
                    {education?.map((edu, idx) => (
                        <li key={idx}>
                            <strong>{edu.years}:</strong> {edu.institution}, {edu.degree}
                        </li>
                    ))}
                </ul>
            </Section>
            <Divider />

            <Section title="Work Experience">
                {experience?.map((exp, idx) => (
                    <ExperienceBlock
                        key={idx}
                        company={exp.company}
                        years={exp.years}
                        bullets={exp.bullets}
                    />
                ))}
            </Section>
            <Divider />

            <Section title="Skills">
                <ul>
                    {skillList.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                    ))}
                </ul>
            </Section>
            <Divider />

            <Section title="Languages">
                <ul>
                    {languages?.map((lang, idx) => (
                        <li key={idx}>{lang.name}: {lang.level}</li>
                    ))}
                </ul>
            </Section>
            <Divider />

            <Section title="Projects">
                <ul>
                    {projects?.map((proj, idx) => (
                        <li key={idx}><strong>{proj.name}</strong>: {proj.description}</li>
                    ))}
                </ul>
            </Section>
            <Divider />

            <Section title="References">
                <ul>
                    {references?.map((ref, idx) => (
                        <li key={idx}>{ref.name} — {ref.contact}</li>
                    ))}
                </ul>
            </Section>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div style={{ marginBottom: "30px" }}>
            <h2 style={{
                fontSize: "1.1rem",
                marginBottom: "10px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#4a90e2"
            }}>{title}</h2>
            {children}
        </div>
    );
}

function Divider() {
    return <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "20px 0" }} />;
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

export default ModernCV3;
