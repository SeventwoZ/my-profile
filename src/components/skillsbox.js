import React from "react";

const Skillsbox = () => {
    const skillGroups = [
        {
            name: "Languages",
            icon: "💻",
            skills: ["JavaScript / TypeScript", "Python", "Java", "C++" ],
        },
        {
            name: "Frontend",
            icon: "🎨",
            skills: ["ReactJS", "HTML5", "CSS3", "Tailwind CSS", "React Native", "Flutter"],
        },
        {
            name: "Backend",
            icon: "⚙️",
            skills: ["Node.js", "Django"],
        },
        {
            name: "API",
            icon: "⚙️",
            skills: ["RestAPI", "RestfulAPI", "JWT Token"],
        },
        {
            name: "Databases",
            icon: "🗄️",
            skills: ["MongoDB", "MySQL"],
        },
        {
            name: "AI & Tools & Methodologies",
            icon: "🛠️",
            skills: ["Git", "GitHub", "Figma", "Jira", "Vercel", "Scrum", "Agile", "Jira", "Docker", "Cursor", "Claude (Certified: Claude 101 by Anthropic)"],
        },
    ];

    return (
        <div className="skills-box">
            {skillGroups.map((group) => (
                <div className="skill-group" key={group.name}>
                    <div className="skill-group-header">
                        <span className="skill-group-icon" aria-hidden="true">
                            {group.icon}
                        </span>
                        <h3 className="skill-group-title">{group.name}</h3>
                    </div>
                    <ul>
                        {group.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skillsbox;
