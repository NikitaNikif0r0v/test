import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/navigation/navigation";
import React from "react";
import { Title } from "./components/title/title";
import { TopBar } from "./components/topbar/topbar";

function App() {
    return (
        <div className="App">
            <div className="page-container">
                <TopBar />
                <Title />
                <Navigation />
            </div>
        </div>
    );
}

export default App;
