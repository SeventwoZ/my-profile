import React, { Component } from "react";
import Widecard from "../components/Widecard.js";
import Social from "../components/Social.js";
import RYW from "../imgs/RYW.png";
import KU from "../imgs/KU.jpg";
import "../css/Card.css";

class Education extends Component {

    render() {
        return (
            <div className="condiv education">
                <h1 className="subtopic">Education</h1>
                <Widecard title="Kasetsart University" where="Bangkok, Thailand" from="August 2021" to="May 2025" image={KU} gpa="2.84" />
                <Widecard title="Rayongwittayakom School" where="Rayong, Thailand" from="May 2015" to="May 2021"  image={RYW} gpa="3.52" />         
                <Social />
            </div>
        );
    }
}

export default Education;
