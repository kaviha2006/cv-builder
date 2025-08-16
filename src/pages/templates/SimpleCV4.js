// templates/SimpleCV4.js
import React from "react";

function SimpleCV4({ data }) {
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
            fontFamily: "Helvetica, sans-serif",
            color: "#333",
            backgroundColor: "#fff",
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
            
            <Section title="Profile Summary">
                <p>{profileSummary}</p>
            </Section>
            <Divider />

            <Section title="Education">
                <Timeline items={education?.map((edu) => ({
                    title: `${edu.institution}, ${edu.degree}`,
                    years: edu.years
                }))} />
            </Section>
            <Divider />

            <Section title="Work Experience">
                <Timeline items={experience?.map((exp) => ({
                    title: exp.company,
                    years: exp.years,
                    bullets: exp.bullets
                }))} />
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
                fontSize: "1.2rem",
                marginBottom: "15px",
                textTransform: "uppercase",
                color: "#444"
            }}>{title}</h2>
            {children}
        </div>
    );
}

function Divider() {
    return <hr style={{ border: "none", borderTop: "1px dotted #ccc", margin: "20px 0" }} />;
}

function Timeline({ items }) {
    return (
        <div style={{ position: "relative", paddingLeft: "20px" }}>
            <div style={{
                position: "absolute",
                left: "8px",
                top: "0",
                bottom: "0",
                width: "2px",
                backgroundColor: "#ccc"
            }} />
            {items?.map((item, idx) => (
                <div key={idx} style={{ marginBottom: "25px", position: "relative" }}>
                    <div style={{
                        position: "absolute",
                        left: "-2px",
                        top: "4px",
                        width: "10px",
                        height: "10px",
                        backgroundColor: "#4a90e2",
                        borderRadius: "50%"
                    }} />
                    <p style={{ marginBottom: "5px" }}><strong>{item.title}</strong> ({item.years})</p>
                    {item.bullets && (
                        <ul>
                            {item.bullets.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

export default SimpleCV4;
