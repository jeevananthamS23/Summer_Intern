// Explore.jsx
import React from "react";
import "./Explore.css";

function Explore({ title, description, buttonText }) {
    return (
        <div className="expo">
            <h1>{title}</h1>
            <h3>{description}</h3>
            <button>{buttonText}</button>
        </div>
    );
}

export default Explore;
