// templates/SimpleCV3.js
import React from "react";

function SimpleCV3({ data }) {
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
            fontFamily: "Segoe UI, sans-serif",
            color: "#333",
            backgroundColor: "#f5f5f5",
            padding: "40px",
            maxWidth: "800px",
            margin: "0 auto"
        }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "5px" }}>{fullName}</h1>
                <p style={{ fontSize: "1.2rem", color: "#666" }}>{title}</p>
            </div>

            {/* Sections */}
            <Card>
                <Section title="Contact">
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Email:</strong> {email}</p>
                    {github && (
                        <p><strong>GitHub:</strong> <a href={github} style={{ color: "#5a9bd8" }}>{github}</a></p>
                    )}
                    {linkedin && (
                        <p><strong>LinkedIn:</strong> <a href={linkedin} style={{ color: "#5a9bd8" }}>{linkedin}</a></p>
                    )}
                </Section>
            </Card>

            <Card>
                <Section title="Profile Summary">
                    <p>{profileSummary}</p>
                </Section>
            </Card>

            <Card>
                <Section title="Education">
                    <ul>
                        {education?.map((edu, idx) => (
                            <li key={idx}>
                                <strong>{edu.years}:</strong> {edu.institution}, {edu.degree}
                            </li>
                        ))}
                    </ul>
                </Section>
            </Card>

            <Card>
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
            </Card>

            <Card>
                <Section title="Skills">
                    <ul>
                        {skillList.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
                </Section>
            </Card>

            <Card>
                <Section title="Languages">
                    <ul>
                        {languages?.map((lang, idx) => (
                            <li key={idx}>{lang.name}: {lang.level}</li>
                        ))}
                    </ul>
                </Section>
            </Card>

            <Card>
                <Section title="Projects">
                    <ul>
                        {projects?.map((proj, idx) => (
                            <li key={idx}><strong>{proj.name}</strong>: {proj.description}</li>
                        ))}
                    </ul>
                </Section>
            </Card>

            <Card>
                <Section title="References">
                    <ul>
                        {references?.map((ref, idx) => (
                            <li key={idx}>{ref.name} — {ref.contact}</li>
                        ))}
                    </ul>
                </Section>
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

function Section({ title, children }) {
    return (
        <div>
            <h2 style={{
                fontSize: "1.3rem",
                marginBottom: "15px",
                color: "#4a90e2"
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

export default SimpleCV3;
