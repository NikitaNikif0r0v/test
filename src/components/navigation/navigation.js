import React, { useState } from "react";
import "./css/navigation.scss";

const navigationItems = [
    {
        key: "email",
        name: "ololoya1994@gmail.com",
        component: (
            <a href="mailto:ololoya1994@gmail.com">ololoya1994@gmail.com</a>
        ),
    },
    {
        key: "telegram",
        name: "Telegram",
        component: <a href="https://t.me/NikNikif0r0v">Telegram</a>,
    },
    {
        key: "linkedin",
        name: "Linkedin",
        component: (
            <a href="https://www.linkedin.com/in/nikitanikif0r0v/">Linkedin</a>
        ),
    },
    {
        key: "about",
        name: "About",
        component: <AboutModal />,
    },
    {
        key: "cv",
        name: "CV",
        component: (
            <a href="https://www.linkedin.com/in/nikitanikif0r0v/">CV</a>
        ),
    },
];

function AboutModal() {
    const [modalStatus, setModalStatus] = useState(false);

    const modalContainer = (
        <>
            <div className="about-modal-container">
                <div className="close-modal"></div>
            </div>
        </>
    );

    const data = (
        <>
            <div
                className="navigation-item"
                onClick={() => setModalStatus(true)}
            >
                About
            </div>
            {modalContainer}
        </>
    );

    console.log(modalStatus);

    return data;
}

export function Navigation() {
    return (
        <>
            <div className="navigation">
                {navigationItems.map((navigationItem) => (
                    <>
                        <div
                            className="navigation-item"
                            id={navigationItem.key}
                        >
                            {navigationItem.component}
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}
