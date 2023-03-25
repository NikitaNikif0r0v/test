import React from "react";
import "./css/title.scss";

const titleData = {
    header: "Hi, my name is Nik, I'm a full-stack developer from Montenegro",
};

export function Title() {
    return (
        <>
            <div className="title-container">
                <div className="title-text">{titleData.header}</div>
            </div>
        </>
    );
}
