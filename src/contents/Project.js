import React, { Component } from "react";
import Projectcard from "../components/Projectcard.js";
import Social from "../components/Social.js";

import QA from "../imgs/QA.png";
import lovedtree from "../imgs/lovedtree.jpg";
import referite from "../imgs/Referite.png";
import MyMoon from "../imgs/MyMoon.png";

class Project extends Component {
    handleCardClick = (link) => {
        if (!link) return;
        window.open(link, "_blank");
    };

    render() {
        const projects = [
            {
                section: "Projects",
                items: [
                    {
                        title: "QA-RPG",
                        role: "Fullstack Developer | Django, TailwindCSS",
                        desc: "QA-RPG is a text-based RPG that blends classic role-playing mechanics with a question-answering system, turning gameplay into an engaging way to learn while still feeling like a real RPG adventure.",
                        image: QA,
                        link: "https://github.com/Rabbit-Hunt-Studios/QA-RPG",
                    },
                    {
                        title: "Loved-Tree",
                        role: "Frontend Developer | React",
                        desc: "Loved-Tree is a project that brings together three modules—hardware, backend, and frontend. Its main purpose is to help people take care of their plants anytime and anywhere through an intuitive UI application.",
                        image: lovedtree,
                        link: "https://github.com/exceed-group07/Loved-Tree",
                    },
                    {
                        title: "Referite",
                        role: "Frontend Developer | React",
                        desc: "Referite is an application whose primary purpose is to assist the Paris Organizing Committee in efficiently handling event scheduling and documenting medal outcomes. It features real-time tracking, validation, and referee management.",
                        image: referite,
                        link: "https://github.com/Referite",
                    },
                ],
            },
            {
                section: "Side Projects",
                items: [
                    {
                        title: "MyMoon",
                        role: "React",
                        desc: "The fanmade fanbase website made for Lingling CGM48.",
                        image: MyMoon,
                        link: "https://mymoon-rabbit.vercel.app",
                    },
                ],
            },
        ];

        return (
            <div className="condiv project">
                <h1 className="subtopic">Projects</h1>

                {projects.map((group, gIndex) => (
                    <div key={gIndex}>
                        {group.section !== "Projects" && (
                            <h1 className="subtopic">{group.section}</h1>
                        )}

                        {group.items.map((project, index) => (
                            <div
                                key={index}
                                onClick={() => this.handleCardClick(project.link)}
                                style={{ cursor: "pointer" }}
                            >
                                <Projectcard
                                    title={project.title}
                                    role={project.role}
                                    desc={project.desc}
                                    image={project.image}
                                />
                            </div>
                        ))}
                    </div>
                ))}

                <Social />
            </div>
        );
    }
}

export default Project;