import React from "react";

const Skillsbox = () => {
    const skillGroups = [
        {
            name: "Languages",
            icon: "💻",
            skills: ["Python", "JavaScript / TypeScript", "Java", "C++"],
        },
        {
            name: "Frontend",
            icon: "🎨",
            skills: ["React", "HTML/CSS", "TailwindCSS"],
        },
        {
            name: "Backend",
            icon: "⚙️",
            skills: ["Node.js", "Django"],
        },
        {
            name: "Databases",
            icon: "🗄️",
            skills: ["MongoDB", "MySQL"],
        },
        {
            name: "Tools & Workflow",
            icon: "🛠️",
            skills: ["Git", "GitHub", "Figma", "Vercel", "Scrum", "Agile"],
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
