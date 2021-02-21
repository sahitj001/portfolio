import React from "react"
import styles from '../css/about.module.scss'
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import cat from '../assets/images/cat.bmp';
import dot from '../assets/images/about-dot.svg';

export function About() {
	return (
		<div className={styles.container}>

			<div className={styles.heading}>
				<header className={styles.header}>
					<h1 className={styles.title}>ABOUT</h1>
					<h2 className={styles.subtitle}>JORDY SAHIT</h2>
					<p>Focused on UX/Frontend</p>
				</header>

				<nav>
					<ul className={styles.flexList}>
						<li className={styles.backButton}>
							<Link to="/">  &lt; </Link>
						</li>
						<li className={styles.navItem}>
							<Link to="/work">Work</Link>
						</li>
						<li className={styles.navItem}>
							<a href="mailto:jordy.sahit@hva.nl">Contact</a>
						</li>
					</ul>
				</nav>
			</div>

			<Tilt className={styles.tiltDot} tiltMaxAngleX={2} tiltMaxAngleY={2}  trackOnWindow={true} tiltReverse={true} transitionSpeed={2500}>
					<img src={dot} className={styles.trDot} alt=""/>
					<img src={dot} className={styles.tlDot} alt=""/>
					<img src={dot} className={styles.blDot} alt=""/>
					<img src={dot} className={styles.brDot} alt=""/>
				</Tilt>

			<div className={styles.content}>
				<div className={styles.column}>
					<h2>Who am I?</h2>
					<div className={styles.iconSection}>
					<p>Portofolio designed by myself and made with ❤️ on React</p>
					<ion-icon className={styles.reactLogo} name="logo-react"></ion-icon>
					</div>

				</div>

				<div className={styles.column}>
					<h2>Who am I?</h2>
					<p>Some say I am a legend. But it do be like that.</p>
				</div>
			</div>


		</div>
	)
}
