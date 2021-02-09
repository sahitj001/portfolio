import React from "react"
import styles from '../css/about.module.scss'
import {Route, BrowserRouter as Router, Link} from "react-router-dom";


export function About(){
    return(
    <div className={styles.container}>
        <h1 className={styles.test}>About</h1>
        <Link to="/">Home</Link>
    </div>
    )
}
