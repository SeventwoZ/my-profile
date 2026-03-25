import React from "react";
import "../css/Certificate.css";
import ClaudeCert from "../imgs/Certificate-claude.jpg";

const Certificate = () => {
    return (
        <div className="condiv Certificates">
            <h1 className="header-text">Certificates</h1>

            <div className="certificates-container">
                <a href="https://drive.google.com/file/d/1xyVWYS-cGUlHVLThtOgmTFAb94adjlNV/view?usp=sharing" target="_blank" rel="noreferrer">
                    <div className="cert-card">
                        <div className="cert-img-wrapper">
                            <img
                                src={ClaudeCert}
                                alt="Claude 101 - Anthropic"
                                className="cert-img"
                            />
                        </div>

                        <div className="cert-content">
                            <span className="cert-issuer">ANTHROPIC</span>
                            <h2 className="cert-title">Claude 101</h2>
                            <p className="cert-desc">
                                Completed foundational training on Claude's architecture
                                and advanced prompt engineering techniques.
                            </p>
                            <div className="cert-badge">AI Specialist</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Certificate;