import React from "react";
import styles from "../link/index.module.css";

const Link = ({ title, href, type }) => {
    return (
        <div className={styles[`${type}-list-item`]}>
            <a className={styles[`${type}-link`]} href={href}>{title}</a>
        </div>
    );
}

export default Link;