import React from "react";
import styles from "./index.module.css";
import Link from "../link";

const Footer = () => {

    return (
        <footer className={styles.footer}>
                <Link href='#' title='Going to 1' type="footer" />
                <Link href='#' title='Going to 2' type="footer" />
                <Link href='#' title='Going to 3' type="footer" />
                <Link href='#' title='Going to 4' type="footer" />
                <Link href='#' title='Going to 5' type="footer" />
                <Link href='#' title='Going to 6' type="footer" />
            <p className={styles.university}>Software University &reg; 2023</p>
        </footer >
    );
}


export default Footer;
