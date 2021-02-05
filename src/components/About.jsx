import React from "react"
import styles from '../css/about.module.css'
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
console.log(styles)

export function About(){
    return(
    <div className={styles.container}>
        <h1 className={styles.test}>About</h1>
        <Link to="/">Home</Link>
    </div>
    )       
}