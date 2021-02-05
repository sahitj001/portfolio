import styles from '../css/index.module.css'
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
console.log(styles);

export function Index(){
    return(
    <div className={styles.container}>
        <div className={styles.tlDot}></div>
        <div className={styles.blDot}></div>
        <div className={styles.trDot}></div>
        <div className={styles.brDot}></div>
        <div className={styles.el1}></div>
        <div className={styles.el2}></div>
        <div className={styles.el3}></div>
        <div className={styles.el4}></div>
        
        <header className={styles.header}>
        <h1 className={styles.title}>PORTFOLIO</h1>
        <h2 className={styles.subtitle}>JORDY SAHIT</h2>   
        </header>

        <nav>
            <ul className={styles.flexList}>
                <li className={styles.navItem}>
                <Link to="/about">About</Link> 
                </li>
                <li className={styles.navItem}>
                <Link to="/about">Work</Link> 
                </li>
                <li className={styles.navItem}>
                <Link to="/about">Contact</Link> 
                </li>
            </ul>  
        </nav>
        
        
    </div>
    )       
}