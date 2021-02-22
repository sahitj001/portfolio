import styles from '../css/index.module.scss';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';



export function Index(props) {
	console.log(props.email)
	return (

			<div className={styles.container}>
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
							<Link to="/work">Work</Link>
						</li>
						<li className={styles.navItem}>
							<a href="mailto:jordy.sahit@hva.nl">Contact</a>
						</li>
					</ul>
				</nav>

				<Tilt className={styles.tiltDot} tiltMaxAngleX={3} tiltMaxAngleY={3} trackOnWindow={true} tiltReverse={true} transitionSpeed={2500}>
					<div className={styles.tlDot}></div>
					<div className={styles.blDot}></div>
					<div className={styles.trDot}></div>
					<div className={styles.brDot}></div>
				</Tilt>

				<Tilt className={styles.tilt} tiltMaxAngleX={1} tiltMaxAngleY={1} trackOnWindow={true} tiltReverse={true} transitionSpeed={1500}>
					<div className={styles.el1}></div>
					<div className={styles.el2}></div>
					<div className={styles.el3}></div>
					<div className={styles.el4}></div>
				</Tilt>

				<div className={styles.stripes}>
					<div className={styles.el5}></div>
					<div className={styles.el6}></div>
					<div className={styles.el7}></div>
				</div>
			</div>

	)
}
