import React from "react"
import styles from '../css/work.module.scss'
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import cat from '../assets/images/cat.bmp';
import workDot from '../assets/images/work-dot.svg';

export function Work() {
	return (
		<div className={styles.container}>

			<div className={styles.heading}>
				<header className={styles.header}>
					<h1 className={styles.title}>WORK</h1>
					<h2 className={styles.subtitle}>JORDY SAHIT</h2>
					<p>Focused on UX/Frontend</p>
				</header>

				<nav>
					<ul className={styles.flexList}>
						<li className={styles.backButton}>
							<Link to="/">  &lt; </Link>
						</li>
						<li className={styles.navItem}>
							<Link to="/about">About</Link>
						</li>
						<li className={styles.navItem}>
							<a href="mailto:jordy.sahit@hva.nl">Contact</a>
						</li>
					</ul>
				</nav>
			</div>

			<Tilt className={styles.tiltDot} tiltMaxAngleX={2} tiltMaxAngleY={2} trackOnWindow={true} tiltReverse={true} transitionSpeed={2500}>
				<img className={styles.tlDot} src={workDot} alt=""/>
				<img className={styles.blDot} src={workDot} alt=""/>
				<img className={styles.trDot} src={workDot} alt=""/>
				<img className={styles.brDot} src={workDot} alt=""/>
			</Tilt>

			<div className={styles.content}>
				<div className={styles.column}>
					<img src={cat} alt="" />
					<img src={cat} alt="" />
					<img src={cat} alt="" />
				</div>

				<div className={styles.column}>
					<img src={cat} alt="" />
					<img src={cat} alt="" />
					<img src={cat} alt="" />
				</div>
			</div>

		</div>
	)
}
