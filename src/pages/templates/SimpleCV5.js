// templates/SimpleCV5.js
import React from "react";

function SimpleCV5({ data }) {
    const {
        fullName,
        title,
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
            fontFamily: "Verdana, sans-serif",
            color: "#222",
            backgroundColor: "#fff",
            padding: "40px",
            maxWidth: "800px",
            margin: "0 auto"
        }}>
            {/* Header */}
            <div style={{ marginBottom: "30px" }}>
                <h1 style={{
                    fontSize: "2.5rem",
                    marginBottom: "5px",
                    fontWeight: "bold"
                }}>{fullName}</h1>
                <p style={{ fontSize: "1.2rem", color: "#555" }}>{title}</p>
            </div>

            {/* Sections */}
            <Section title="Contact">
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>
                {github && (
                    <p><strong>GitHub:</strong> <a href={github} style={{ color: "#007acc" }}>{github}</a></p>
                )}
                {linkedin && (
                    <p><strong>LinkedIn:</strong> <a href={linkedin} style={{ color: "#007acc" }}>{linkedin}</a></p>
                )}
            </Section>

            <Section title="Profile Summary">
                <p>{profileSummary}</p>
            </Section>

            <Section title="Education">
                <ul>
                    {education?.map((edu, idx) => (
                        <li key={idx}>
                            <strong>{edu.years}:</strong> {edu.institution}, {edu.degree}
                        </li>
                    ))}
                </ul>
            </Section>

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

            <Section title="Skills">
                <ul>
                    {skillList.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                    ))}
                </ul>
            </Section>

            <Section title="Languages">
                <ul>
                    {languages?.map((lang, idx) => (
                        <li key={idx}>{lang.name}: {lang.level}</li>
                    ))}
                </ul>
            </Section>

            <Section title="Projects">
                <ul>
                    {projects?.map((proj, idx) => (
                        <li key={idx}><strong>{proj.name}</strong>: {proj.description}</li>
                    ))}
                </ul>
            </Section>

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
                fontSize: "1.2rem",
                marginBottom: "10px",
                borderBottom: "2px solid #ccc",
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

export default SimpleCV5;