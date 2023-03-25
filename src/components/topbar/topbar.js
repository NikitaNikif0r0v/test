import React from "react";
import logo from "./img/nikita-logo.svg";
import "./css/topbar.scss";

function Contact() {
    return (
        <>
            <button className="contact-me-button">Contact me</button>
        </>
    );
}

export function TopBar() {
    return (
        <>
            <div className="top-bar-container">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="contact-me-button">
                    <Contact />
                </div>
            </div>
        </>
    );
}
