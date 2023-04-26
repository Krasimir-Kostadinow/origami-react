import React from "react";

const Link = ({ title, href }) => {
    return (
        <div>
            <a href={href}>{title}</a>
        </div>
    );
}

export default Link;