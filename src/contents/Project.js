import React, { Component } from "react";
import Projectcard from "../components/Projectcard.js";
import Social from "../components/Social.js";
import QA from "../imgs/QA.png";
import lovedtree from "../imgs/lovedtree.jpg";
import referite from "../imgs/Referite.png";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: ["https://github.com/Rabbit-Hunt-Studios/QA-RPG", "https://github.com/exceed-group07/Loved-Tree", "https://github.com/Referite"]
        };
    }

    handleCardClick(index) {
        window.open(this.state.link[index], "_blank");
    }

    render() {
        const projectCards = [
            {
                title: "QA-RPG",
                role: "Fullstack Developer | Django, TailwindCSS",
                desc: "QA-RPG is a text‑based RPG that blends classic role‑playing mechanics with a question‑answering system, turning gameplay into an engaging way to learn while still feeling like a real RPG adventure.",
                image: QA,
            },
            {
                title: "Loved-Tree",
                role: "Frontend Developer | React",
                desc: "Loved-Tree is a project that brings together three modules—hardware, backend, and frontend. Its main purpose is to help people take care of their plants anytime and anywhere through an intuitive UI application.",
                image: lovedtree,
            },
            {
                title: "Referite",
                role: "Frontend Developer | React",
                desc: "Referite is an application that primary purpose is to assist the Paris Organizing Committee in efficiently handling event scheduling and documenting medal outcomes. The application features a referee login portal, real-time result tracking, data validation capabilities, and a user-friendly interface for overseeing competition details and country participation.",
                image: referite,
            },
        ];

        return (
            <div className="condiv project">
                <h1 className="subtopic">Projects</h1>
                {projectCards.map((project, index) => (
                    <div key={index} onClick={() => this.handleCardClick(index)} style={{ cursor: 'pointer' }}>
                        <Projectcard
                            title={project.title}
                            role={project.role}
                            desc={project.desc}
                            image={project.image}
                        />
                    </div>
                ))}
                <Social />
            </div>
        );
    }
}

export default Project;
