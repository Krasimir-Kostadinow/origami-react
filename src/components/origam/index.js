import React from "react";
import styles from "./index.module.css";

const Origam = ({ title, descriptions, steps }) => {
    // const stepsDescription = Object.entries(steps);
    return (
        <div className={styles.container}>
            <p className={styles.description}>{descriptions}</p>
            <div className={styles.user}>
                <span>
                    <small>Title: {title}</small>
                </span>
            </div>
        </div>
        // <div className={styles["origam-card"]}>
        //     <h4>{title}</h4>
        //     <p>{descriptions}</p>
        //     <ul>
        //         {stepsDescription.map(([stepNum, description], index) => {
        //            return <li key={description[1]+description[7] + index.toString() + descriptions[12]}>{stepNum}: {description}</li>
        //         })}
        //     </ul>
        // </div>
    );
}


export default Origam;