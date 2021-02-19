import React from "react"
import styles from '../css/work.module.scss'
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import cat from '../assets/images/cat.bmp';

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

			<Tilt className={styles.tilt} tiltMaxAngleX={2} tiltMaxAngleY={2} scale={0.95} trackOnWindow={true} tiltReverse={true} transitionSpeed={2500}>
				<div className={styles.tlDot}></div>
				<div className={styles.blDot}></div>
				<div className={styles.trDot}></div>
				<div className={styles.brDot}></div>
			</Tilt>

			<div className={styles.testt}>
				<div className={styles.test}>
					<img src={cat} alt="" />
					<img src={cat} alt="" />
					<img src={cat} alt="" />
				</div>

				<div className={styles.test}>
					<img src={cat} alt="" />
					<img src={cat} alt="" />
					<img src={cat} alt="" />
				</div>
			</div>




		</div>
	)
}
