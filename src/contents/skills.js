import React, { Component } from "react";
import Skillsbox from "../components/skillsbox";
import "../css/skills.css"

class Skills extends Component {

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">Skills</h1>
                <Skillsbox />
            </div>
        );
    }
}

export default Skills;
