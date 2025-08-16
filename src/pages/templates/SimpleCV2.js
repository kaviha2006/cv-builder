// templates/SimpleCV2.js
import React from "react";

function SimpleCV2({ data }) {
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
            fontFamily: "Arial, sans-serif",
            color: "#222",
            backgroundColor: "#fff",
            padding: "40px",
            maxWidth: "900px",
            margin: "0 auto"
        }}>
            {/* Header */}
            <div style={{ marginBottom: "30px" }}>
                <h1 style={{
                    fontSize: "2.8rem",
                    marginBottom: "5px",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                }}>{fullName}</h1>
                <p style={{ fontSize: "1.2rem", color: "#666" }}>{title}</p>
            </div>

            {/* Grid Layout */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
                {/* Left Column */}
                <div>
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
                </div>

                {/* Right Column */}
                <div>
                    <Section title="Profile Summary">
                        <p>{profileSummary}</p>
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
            </div>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div style={{ marginBottom: "25px" }}>
            <h2 style={{
                fontSize: "1rem",
                marginBottom: "10px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#444"
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

export default SimpleCV2;
